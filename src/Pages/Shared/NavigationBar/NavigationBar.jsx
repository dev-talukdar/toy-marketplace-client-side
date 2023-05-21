import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import logo from '../../../../public/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";



const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)




    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => console.error(error))
    }

    const handleLogIn = () => {

    };


    return (

        <div className="navbar bg-base-200 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link className="hover:text-orange-600" to={'/'}>Home</Link>
                        <Link className="hover:text-orange-600" to={'allCars'}>All Cars</Link>
                        <Link className="hover:text-orange-600" to={'myCars'}>My Cars</Link>
                        <Link className="hover:text-orange-600" to={'addCars'}>Add a Car</Link>
                        <Link className="hover:text-orange-600" to={'blog'}>Blog</Link>

                        <Link className='hover:text-orange-600 ' to={'login'}>
                        <div className='flex gap-4 items-center'><span className='text-orange-600'>
                            <FaUserAlt></FaUserAlt></span>
                            <button className=" " onClick={handleLogIn}>Log In </button>
                            {user &&
                                <div className="flex text-purple-600 gap-2">{user.displayName}
                                    <img className="w-24 rounded-xl" style={{ height: "30px", width: "30px" }} src={user.photoURL} alt="" />
                                </div>}
                        </div>
                    </Link>

                    <Link>
                        {user ?
                            <button className="btn btn-xs bg-orange-400 border-none" onClick={handleLogOut}>Log Out </button> :
                            <Link to={"/login"}>

                            </Link>
                        }

                    </Link>
                    </ul>
                </div>
                <Link to={'/'}><img className='' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    <Link className="hover:text-orange-600" to={'/'}>Home</Link>
                    <Link className="hover:text-orange-600" to={'allCars'}>All Cars</Link>
                    <Link className="hover:text-orange-600" to={'myCars'}>My Cars</Link>
                    <Link className="hover:text-orange-600" to={'addCars'}>Add a Car</Link>
                    <Link className="hover:text-orange-600" to={'blog'}>Blog</Link>
                </ul>
            </div>
            <div className="navbar-end mx-8 hidden lg:flex">

                <ul className="menu menu-horizontal px-1 gap-4 ">
                    <Link className='hover:text-orange-600 ' to={'login'}>
                        <div className='flex gap-4 items-center'><span className='text-orange-600'>
                            <FaUserAlt></FaUserAlt></span>
                            <button className=" " onClick={handleLogIn}>Log In </button>
                            {user &&
                                <div className="flex text-purple-600 gap-2">{user.displayName}
                                    <img className="w-24 rounded-xl" style={{ height: "30px", width: "30px" }} src={user.photoURL} alt="" />
                                </div>}
                        </div>
                    </Link>

                    <Link>
                        {user ?
                            <button className="btn btn-xs bg-orange-400 border-none" onClick={handleLogOut}>Log Out </button> :
                            <Link to={"/login"}>

                            </Link>
                        }

                    </Link>

                    <Link className='hover:text-orange-600 ' to={'wishList'}>
                        <div className='flex gap-4 items-center'><span className='text-orange-600'>
                            <FaHeart></FaHeart></span>
                            <p>My Wish List (0)</p>
                        </div>
                    </Link>

                    <Link className='hover:text-orange-600 ' to={'shoppingCart'}>
                        <div className='flex gap-4 items-center'> <span className='text-orange-600'>
                            < FaShoppingCart></FaShoppingCart></span>
                            <p>My Bag (0)</p>
                        </div>
                    </Link>
                </ul>
            </div>
        </div>

    );
};

export default NavigationBar;