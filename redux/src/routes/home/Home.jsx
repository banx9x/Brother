import "./Home.css";
import gameService from "../../features/game/game.service";
import Card from "../../components/card";

function App() {
    const {
        data = [],
        isLoading,
        isError,
        error,
    } = gameService.useGetGameListQuery();

    return (
        <div className="App">
            <h1>Game List</h1>

            <div className="game-list">
                {isLoading && <div>Loading...</div>}

                {isError && (
                    <div>
                        Something wrong :( <br /> {JSON.stringify(error)}
                    </div>
                )}

                {data.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
}

export default App;
