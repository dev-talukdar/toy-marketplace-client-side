import { Link, useLoaderData } from "react-router-dom";



const SingleCar = () => {
    const allCars = useLoaderData()
    const { subPicture, name, seller_name, seller_email, category, price, rating, quantity } = allCars;

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
            <div className="relative m-3 flex flex-wrap mx-auto justify-center">
                <div className="min-w-[340px]flex flex-col group">
                    <div className="flex justify-center"
                    >

                        <img  src={subPicture}
                            className="object-cover w-80% h-full scale-80 group-hover:scale-110 transition-all duration-400"
                            alt="" />

                         

                    </div>
                    <Link to="./single_post.html"
                        className=" block text-black text-center hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-1  ">
                        {name}</Link>

                    <div className=" mb-5 ">
                        <div className="">
                            <h4 className="text-xl text-sky-500">Seller: {seller_name}</h4>
                            <h4 className="text-xl text-sky-500">Contact: {seller_email}</h4>
                            <h4 className="text-xl text-sky-500">Category: {category}</h4>
                        </div>
                        <div className=" ">
                            <h4 className="text-xl text-sky-500">Price: $ {price}</h4>
                            <h4 className="text-xl text-sky-500">Rating: {rating}</h4>
                            <h4 className="text-xl text-sky-500">Items left: {quantity}</h4>
                        </div>
                    </div>


                    <div className="mb-6">
                        <p>Experience the thrill of our high-performance toy cars. Unleash speed, conquer tracks, and ignite your imagination. Get yours now and embark on endless racing adventures!</p>
                    </div>


                    <div className="flex justify-center gap-x-3">
                        <Link to="/track_order.html"
                            className=" px-5 py-2 border    transition-all outline-none bg-black border-black text-white hover:text-black hover:bg-white font-bold">
                            Add</Link>
                        <Link to="/track_order.html"
                            className="px-5 py-2 border     transition-all outline-none bg-white border-black text-black hover:text-white hover:bg-black font-bold">
                            View</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SingleCar;