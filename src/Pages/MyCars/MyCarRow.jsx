import { FaPen, FaRegTimesCircle } from "react-icons/fa";  


const MyCarRow = ({ addedCar, handleDelete }) => {
    const { _id, photoUrl, productName, sellerName, email, subCategory, price, rating, availableQuantity } = addedCar;

    
    return (
        <tr>
             
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td> {productName} </td>
            <td>{sellerName}</td>
            <td>{email}</td>
            <td>{subCategory}</td>
            <td>$ {price}</td>
            <td>{rating}</td>
            <td>{availableQuantity}</td>
            <th>
                <button className="btn btn-ghost btn-sm text-xl"><FaPen></FaPen> </button>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-sm text-xl"><FaRegTimesCircle></FaRegTimesCircle> </button>
            </th>
        </tr>
    );
};

export default MyCarRow;