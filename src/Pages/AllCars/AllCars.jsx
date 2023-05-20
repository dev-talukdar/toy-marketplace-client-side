import { useEffect, useState } from "react";
import AllCarCards from "./AllCarCards";


const AllCars = () => {

    const [allCars, setAllCars] = useState([]);

    useEffect(() => {
        fetch('https://toy-marketplace-server-side-sigma.vercel.app/cars')
            .then(res => res.json())
            .then(data => setAllCars(data))

    }, []);


    return (
        <div className="container mx-auto mt-16 mb-16">
           {
             allCars.map(allCar => <AllCarCards
             key={allCar._id}
             allCar={allCar}
             ></AllCarCards>)
           }
            
        </div>
    );
};

export default AllCars;