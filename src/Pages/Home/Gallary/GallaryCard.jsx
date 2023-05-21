import { Link } from "react-router-dom";

const GallaryCard = ({ gallery }) => {
    const { _id, name, seller_name, price, subPicture, detailsButton } = gallery; 


    return (
        <div className="card-container" data-aos="fade-up">
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={subPicture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="text-xl">price: ${price}</h2>
                    <h2 className="text-xl">seller: {seller_name}</h2>
                    <Link to={`/singleCar/${_id}`}><button className="btn bg-orange-600 border-none">{detailsButton}</button></Link>

                </div> 
            </div>         
            </div>         
    );
};

export default GallaryCard;