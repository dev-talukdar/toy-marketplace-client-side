import { FaCertificate, FaTruckMoving, FaUserCircle } from "react-icons/fa";


const BottomNav = () => {
    return (
        <div className="navbar border border-gray-100 rounded justify-center">
   
        <ul className="gap-4"> 
        <div className="flex items-center gap-3 ">
            <span className="text-orange-400 text-xl"><FaCertificate></FaCertificate></span>
            <p className="hover:text-orange-400">Official Shop</p> 
        </div>  

        <div className="flex items-center gap-3">
            <span className="text-orange-400 text-xl"><FaUserCircle></FaUserCircle></span>
            <p className="hover:text-orange-400">Personal Service</p> 
        </div>  
        <div className="flex items-center gap-3">
            <span className="text-orange-400 text-2xl"><FaTruckMoving></FaTruckMoving></span>
            <p className="hover:text-orange-400">Fast delivery</p> 
        </div>  
        </ul> 
</div>

    );
};

export default BottomNav;