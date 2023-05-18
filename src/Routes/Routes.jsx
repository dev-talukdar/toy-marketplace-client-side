import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllCars from "../Pages/AllCars/AllCars";
import AddACars from "../Pages/AddACars/AddACars";
import MyCars from "../Pages/MyCars/MyCars";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'all_cars',
                element: <AllCars></AllCars>
            },
            {
                path: 'add_cars',
                element: <AddACars></AddACars>
            },
            {
                path: 'my_cars',
                element: <MyCars></MyCars>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
        ]
    }
])

export default router;