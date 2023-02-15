import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
    {
    element: <Layout />,
      // Nạp trươcs dữ liệu cần theíet cho web
      loader: () => {},

        children: [
            {
                path: "/",
            element: <Home />,
                // Tìm nạp trước dữ liệu 
                loader: () => {},
                action: () => {},
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/products/:id",
                element: <ProductDetail />,
            },
            {
                path: "/cart",
                element: <div>Giỏ hàng</div>,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
