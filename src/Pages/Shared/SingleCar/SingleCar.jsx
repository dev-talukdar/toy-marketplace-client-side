import { useLoaderData } from "react-router-dom";

 

const SingleCar = ( ) => {
    const allCars = useLoaderData()
    const {subPicture, productName, sellerName, email, subCategory, price, rating, availableQuantity} = allCars;
    
    return (
        <div>
            <h2>we are getting data from here any doubt ?:{allCars.length} </h2>
            
             <img src={subPicture} alt="" />
            <p>{productName}</p>
            <p>seller name: {sellerName}</p>
            <p>{email}</p>
            <p>{subCategory}</p>
            <p> price: ${price}</p>
            <p>rating: {rating}</p>
            <p>{availableQuantity}</p>
        </div>
    );
};

export default SingleCar;