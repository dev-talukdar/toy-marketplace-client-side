import { Link } from "react-router-dom";


const AllCarCards = ({ allCar }) => {
    const { _id, name, seller_name, category, price, quantity } = allCar; 
    return (
        <tr>

            

            <td> {name} </td>
            <td>{seller_name}</td>
            
            <td>{category}</td>
            <td>$ {price}</td>
             
            <td>{quantity}</td>
            <th>
                <Link to={`/singleCar/${_id}`}><button className="btn bg-orange-600 border-none btn-sm ">View Details</button></Link>
            </th> 
        </tr>

    );
};

export default AllCarCards;