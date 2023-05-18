import { Link } from 'react-router-dom';
import logo from '../../../../public/logo.png'
import { FaUserAlt, FaHeart, FaShoppingCart } from "react-icons/fa";

const TopNav = () => {
    return (
        <div className="navbar bg-base-100  ">
            <div className="navbar-start">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5 ">
                        <Link className='hover:text-orange-600 ' to={'guestServices'}>Guest Services</Link>
                        <Link className='hover:text-orange-600 ' to={'storeLocator'}>Store Locator</Link>
                    </ul>
                </div>

            </div>
            <div className="navbar-center">
                <img className='' src={logo} alt="" />

            </div>
            <div className="navbar-end mx-8 hidden lg:flex">

                <ul className="menu menu-horizontal px-1 gap-5 ">
                    <Link className='hover:text-orange-600 ' to={'login'}>
                        <div className='flex gap-4 items-center'><span className='text-orange-600'>
                            <FaUserAlt></FaUserAlt></span>
                            <p>Log In</p>
                        </div>
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
            <hr className="border-b h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>

    );
};

export default TopNav;