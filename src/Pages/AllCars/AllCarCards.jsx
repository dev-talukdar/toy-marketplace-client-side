import { Link } from "react-router-dom";


const AllCarCards = ({ allCar }) => {
    const { name, seller_name, quantity, detailsButton, category, price } = allCar
    return (


        <table className="table w-full">

            <thead>
                <tr>
                    <th>Seller Name</th>
                    <th>Car Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Details</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>
                        <p>{seller_name}</p>
                    </td> 
                <td>
                    <p>{name}</p>
                </td>

                <td>
                    <p>{category}</p>
                </td>

                <td>
                    <p>{quantity}</p>
                </td>

                <td>
                    <p>$ {price}</p>
                </td>

                <td>
                     <Link ><button className="btn btn-xs bg-orange-600 border-none">{detailsButton}</button></Link>
                </td>
                </tr>
            </tbody>  
        </table>


    );
};

export default AllCarCards;