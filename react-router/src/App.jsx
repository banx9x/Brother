import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout, { layoutLoader } from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ProductForm, { productFormActions } from "./pages/ProductForm";

const router = createBrowserRouter([
    {
        element: <Layout />,
        loader: layoutLoader,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/new-product",
                element: <ProductForm />,
                action: productFormActions,
                errorElement: <div>Something wrong :(</div>,
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
    {
        path: "/dashboard",
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
