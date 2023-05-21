import { useEffect, useState } from "react";
import AllCarCards from "./AllCarCards";


const AllCars = () => {

    const [allCars, setAllCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars')
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
                             
                            <th>Photo</th>
                            <th>Product Name</th>
                            <th>Seller Name</th>
                            <th>Seller email</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Rating</th>
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