import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout, { layoutLoader } from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./contexts/auth";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
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
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <PrivateRoute redirectRoute="/login" />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
        ],
    },
]);

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;
