import { Link } from 'react-router-dom';
import logo from '../../../../public/logo.png'
import { FaUserAlt, FaHeart, FaShoppingCart } from "react-icons/fa";

const TopNav = () => {
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5 ">
                        <Link className='hover:text-purple-400 font-medium' to={'guestServices'}>Guest Services</Link>
                        <Link className='hover:text-purple-400 font-medium' to={'storeLocator'}>Store Locator</Link>
                    </ul>
                </div>

            </div>
            <div className="navbar-center">
                <img src={logo} alt="" />

            </div>
            <div className="navbar-end mx-8">

                <ul className="menu menu-horizontal px-1 gap-5 ">
                    <Link className='hover:text-purple-400 font-medium' to={'login'}>
                        <div className='flex gap-4 items-center'><span className='text-blue-600'>
                            <FaUserAlt></FaUserAlt></span>
                            <p>Log In</p>
                        </div>
                    </Link>

                    <Link className='hover:text-purple-400 font-medium' to={'wishList'}>
                        <div className='flex gap-4 items-center'><span className='text-blue-600'>
                        <FaHeart></FaHeart></span>
                            <p>My Wish List</p>
                        </div>
                    </Link> 

                    <Link className='hover:text-purple-500 font-medium' to={'shoppingCart'}>
                        <div className='flex gap-4 items-center'> <span className='text-blue-600'>
                       < FaShoppingCart></FaShoppingCart></span>
                            <p>My Bag</p>
                        </div>
                    </Link> 
                </ul>
            </div>
            <hr className="border-b h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>

    );
};

export default TopNav;