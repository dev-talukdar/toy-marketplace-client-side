

const MyCarRow = ({ addedCar }) => {
    const { photoUrl, productName, sellerName, email, subCategory, price, rating, availableQuantity } = addedCar;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td> {productName} </td>
            <td>{sellerName}</td>
            <td>{email}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{rating}</td>
            <td>{availableQuantity}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default MyCarRow;