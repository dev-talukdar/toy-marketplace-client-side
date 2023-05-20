import { useLoaderData } from "react-router-dom";

 

 

const ShoppingCart = () => { 
    const cars = useLoaderData();
    const {name, price} = cars
    return (
        <div>
            <h2>book service: {name}</h2>
            <h2>book service: {price}</h2>
        </div>
    );
};

export default ShoppingCart;