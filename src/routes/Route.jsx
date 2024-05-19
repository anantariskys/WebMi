import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "../components/layouts/PageLayout";
import Home from "../pages/Home";

const createRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <PageLayout>
                <Home />
            </PageLayout>
        ),
    },
    {
        path: "/*",
        element: <div>Not found</div>,
    },
]);

const Route = () => {
    return <RouterProvider router={createRouter} />;
};

export default Route;