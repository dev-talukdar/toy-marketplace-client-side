  
const GallaryCard = ({ cars }) => {
    const { subPicture, name } = cars;
   

    return (
         <div className="card-container">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={subPicture}  alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2> 
                </div>
            </div> 
            
            
            </div>
    );
};

export default GallaryCard;