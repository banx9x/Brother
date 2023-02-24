import {
    createContext,
    useEffect,
    useRef,
    useState,
    forwardRef,
    useMemo,
    useCallback,
    useContext,
    useReducer,
} from "react";

const TodoForm = forwardRef((props, ref) => {
    const { dispatch, filter } = useContext(AppContext);

    const [title, setTitle] = useState("");

    const handleChange = (e) => {
        // e.stopPropagation();
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: thêm logic kiểm tra
        // TODO: clear ô input sau khi đã submit
        if (title.trim().length > 0)
            dispatch({ type: "add", payload: { title } });

        setTitle("");
    };

    // TODO: bổ sung phần filter
    const handleFilterChange = (e) => {
        if (e.target.name == "filter") {
            const mode = e.target.value;
            dispatch({ type: "filter", payload: { mode } });
        }
    };

    return (
        <div ref={ref}>
            <form onSubmit={handleSubmit} onChange={handleFilterChange}>
                <input value={title} onChange={handleChange} />
                <button>Create</button>

                <div>
                    <span>
                        <input
                            type="radio"
                            name="filter"
                            id="all"
                            value="all"
                            checked={filter == "all"}
                        />
                        <label htmlFor="all">All</label>
                    </span>

                    <span>
                        <input
                            type="radio"
                            name="filter"
                            id="active"
                            value="active"
                            checked={filter == "active"}
                        />
                        <label htmlFor="all">Active</label>
                    </span>

                    <span>
                        <input
                            type="radio"
                            name="filter"
                            id="completed"
                            value="completed"
                            checked={filter == "completed"}
                        />
                        <label htmlFor="all">Completed</label>
                    </span>
                </div>
            </form>
        </div>
    );
});

const TodoList = (props) => {
    const { items } = useContext(AppContext);
    return (
        <ul>
            {items.map((item) => (
                <TodoItem {...item} />
            ))}
        </ul>
    );
};

/**
 * @typedef TodoItem
 *
 * @property {string} id
 * @property {string} title
 * @property {boolean} completed
 */

/**
 *
 * @param {TodoItem} props
 */
const TodoItem = ({ id, title, completed }) => {
    const { dispatch } = useContext(AppContext);

    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch({ type: "update", payload: { id } })}
            />
            {title}{" "}
            <button
                onClick={() => dispatch({ type: "remove", payload: { id } })}
            >
                Xóa
            </button>
        </li>
    );
};

const AppContext = createContext();

const appReducer = (state, { type, payload }) => {
    switch (type) {
        case "add": {
            // Gọi API để tạo Todo mới
            const newTodo = {
                id: new Date().getTime(),
                title: payload.title,
                completed: false,
            };

            // Nhận về dữ liệu Todo mới

            return {
                ...state,
                todos: [newTodo, ...state.todos],
            };
        }

        case "update": {
            const newTodos = state.todos.map((item) =>
                item.id == payload.id
                    ? { ...item, completed: !item.completed }
                    : item
            );

            return {
                ...state,
                todos: newTodos,
            };
        }

        case "remove": {
            const newTodos = state.todos.filter(
                (item) => item.id != payload.id
            );

            return {
                ...state,
                todos: newTodos,
            };
        }

        case "clear": {
            return {
                ...state,
                todos: [],
            };
        }

        case "filter": {
            return {
                ...state,
                filter: payload.mode,
            };
        }

        default: {
            return state;
        }
    }
};

function App() {
    const [{ todos, filter }, dispatch] = useReducer(appReducer, {
        todos: [],
        filter: "all",
    });

    // TODO: Sử dụng useEffect để lưu danh sách todo | filter vào localStorage
    useEffect(() => {
        localStorage.setItem("todoapp-filter", filter);
    }, [filter]);

    useEffect(() => {
        localStorage.setItem("todoapp-todos", JSON.stringify(todos));
    }, [todos]);

    const pendingTasks = todos.filter((todo) => !todo.completed).length;

    const items = useMemo(() => {
        return filter == "all"
            ? todos
            : filter == "active"
            ? todos.filter((item) => !item.completed)
            : todos.filter((item) => item.completed);
    }, [todos, filter]);

    return (
        <AppContext.Provider
            value={{
                items,
                filter,
                dispatch,
            }}
        >
            <h1>TodoApp</h1>

            <TodoForm />

            <TodoList />

            <div>
                <p>You have {pendingTasks} pending tasks</p>

                <button onClick={() => dispatch({ type: "clear" })}>
                    Clear
                </button>
            </div>
        </AppContext.Provider>
    );
}

// TODO: CSS cho ứng dụng
export default App;
