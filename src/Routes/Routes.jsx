import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllCars from "../Pages/AllCars/AllCars";
import AddACars from "../Pages/AddACars/AddACars";
import MyCars from "../Pages/MyCars/MyCars";
import Blog from "../Pages/Blog/Blog";
import ShoppingCart from "../Pages/Shared/ShoppingCart/ShoppingCart";
import WishList from "../Pages/WishList/WishList";
import Login from "../Pages/Shared/Login/Login"; 
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Pages/Shared/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'allCars',
                element: <AllCars></AllCars>
            },
            {
                path: 'addCars',
                element: <AddACars></AddACars>
            },
            {
                path: 'myCars',
                element: <MyCars></MyCars>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <Register></Register>
            },
            {
                path: 'wishList',
                element: <WishList></WishList>
            },
            {
                path: 'shoppingCart',
                element: <ShoppingCart></ShoppingCart>
            },
        ]
    }
])

export default router;