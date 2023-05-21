import { useEffect, useState } from "react";
import AllCarCards from "./AllCarCards";
import useTitle from "../../hooks/useTitle";


const AllCars = () => {

    const [allCars, setAllCars] = useState([]);
    useTitle('Wheels Ville | All Cars')

    useEffect(() => {
        fetch('https://toy-marketplace-server-side-sigma.vercel.app/cars')
            .then(res => res.json())
            .then(data => setAllCars(data))

    }, []);


    return (
        <div className="container mx-auto mt-16 mb-16">
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                             
                             
                            <th>Product Name</th>
                            <th>Seller Name</th> 
                            <th>Category</th>
                            <th>Price</th> 
                            <th>Quantity</th>
                            <th>View Details</th>
                             


                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCars.map(allCar => <AllCarCards
                                key={allCar._id}
                                allCar={allCar}
                                ></AllCarCards>)
                        }
                    </tbody>


                </table>

            </div>
            </div>
            );
};

            export default AllCars;