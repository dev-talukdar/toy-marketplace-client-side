

const AllCarCards = ({ allCar }) => {
    const { name, seller_name, category, price, quantity } = allCar; 
    return (
        <tr>

            

            <td> {name} </td>
            <td>{seller_name}</td>
            
            <td>{category}</td>
            <td>$ {price}</td>
             
            <td>{quantity}</td>
            <th>
                <button className="btn bg-orange-600 border-none btn-sm ">View Details</button>
            </th> 
        </tr>

    );
};

export default AllCarCards;