 

const CategoryCards = ({allCars}) => {
    const { subPicture, name, price } = allCars;
    return (
        <div className="card-container">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={subPicture}  alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2> 
                    <p>{price}</p>
                </div>
            </div>     
            </div>
    );
};

export default CategoryCards;