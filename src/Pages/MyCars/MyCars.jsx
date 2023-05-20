import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyCarRow from "./MyCarRow";



const MyCars = () => {
    const { user } = useContext(AuthContext);
    const [addCar, setAddCar] = useState([]);

    const url = `http://localhost:5000/addCar?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAddCar(data);
            });
    }, []);

    return (
        <div className="container mx-auto mt-16 mb-16">
            <h2>this is my cars page: {addCar.length}  </h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Photo</th>
                            <th>Product Name</th>
                            <th>Seller Name</th>
                            <th>Seller email</th> 
                            <th>Category</th> 
                            <th>Price</th> 
                            <th>Rating</th>   
                            <th>Quantity</th>   


                            <th></th>
                        </tr>
                    </thead>
                    <tbody> 
                        {
                            addCar.map(addedCar => <MyCarRow
                            key={addedCar._id}
                            addedCar = {addedCar}
                            ></MyCarRow>)
                        }
                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyCars;