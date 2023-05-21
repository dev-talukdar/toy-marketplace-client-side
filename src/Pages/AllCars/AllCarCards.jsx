

const AllCarCards = ({ allCar }) => {
    const { subPicture, name, seller_name, seller_email, category, price, rating, quantity } = allCar; 
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-24 rounded">
                            <img src={subPicture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>

            <td> {name} </td>
            <td>{seller_name}</td>
            <td>{seller_email}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <th>
                <button className="btn bg-orange-600 border-none btn-sm ">View Details</button>
            </th> 
        </tr>

    );
};

export default AllCarCards;