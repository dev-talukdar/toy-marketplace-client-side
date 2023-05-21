import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyCarRow from "./MyCarRow";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";



const MyCars = () => {
    const { user } = useContext(AuthContext);
    const [addCar, setAddCar] = useState([]);
    useTitle('Wheels Ville | My Cars')

    const url = `https://toy-marketplace-server-side-sigma.vercel.app/addCar?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAddCar(data);
            });
    }, []);

    const handleDelete = id => {
        const proceed = confirm ('Are you sure ?')

        // Swal.fire({
        //     title: "Are You Sure",
        //     text: "You won't be able to revert this",
        //     icon: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor:'#d33',
        //     confirmButtonText: "Yes Delete it !" 
        // })

        if(proceed) {
           fetch(`https://toy-marketplace-server-side-sigma.vercel.app/addCar/${id}`, {
               method: 'DELETE'
           })
           .then(res => res.json())
           .then(data => {
               console.log(data)
               if(data.deletedCount > 0){
                   Swal.fire({
                       title: "Deleted",
                       text: "Car deleted successfully",
                       icon: "success",
                       confirmButtonText: "Great" 
                   })
                   const remaining = addCar.filter(car => car._id !==id)
                   setAddCar(remaining);
               }
           })
        }
   }

    return (
        <div className="container mx-auto mt-16 mb-96">
            

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
                            <th>Update</th>    
                            <th>Delete</th>    


                            <th></th>
                        </tr>
                    </thead>
                    <tbody> 
                        {
                            addCar.map(addedCar => <MyCarRow
                            key={addedCar._id}
                            addedCar = {addedCar}
                            handleDelete={handleDelete}
                            ></MyCarRow>)
                        }
                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyCars;