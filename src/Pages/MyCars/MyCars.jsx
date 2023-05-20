import { useLoaderData } from "react-router-dom";

 

const MyCars = () => {

    const cars = useLoaderData();

    return (
        <div>
            <h2>this is my cars page: {cars.length} </h2>
        </div>
    );
};

export default MyCars;