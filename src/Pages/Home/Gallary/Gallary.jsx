 
import { useState, useEffect } from 'react';

const Gallary = () => {
  
  const [gallery, setGallery] = useState([]);
  const [showAllCards, setShowAllCards] = useState(false);

  useEffect(() => {
    fetch('https://toy-marketplace-server-side-sigma.vercel.app/cars')
      .then(res => res.json())
      .then(data => setGallery(data))
    
  }, []);

  const displayedCards = showAllCards ? gallery : gallery.slice(0, 6);

  const handleViewMore = () => {
    setShowAllCards(true);
  };

  return (
    <div>
      <h2 className="text-center text-4xl font-bold mt-16 mb-12">Trending Cars</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCards.map(cars => (
          <GallaryCard key={cars._id} cars={cars} />
        ))}
      </div>
      {!showAllCards && (
        <div className="flex justify-center btn-block mt-12 mb-12">
          <button className="btn bg-orange-600 border-none" onClick={handleViewMore}>
            View More
          </button>
        </div>
      )}
    </div>
  );
};

const GallaryCard = ({ cars }) => {
  const { subPicture, name } = cars;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={subPicture} alt="Car" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
        </div>
      </div>
    </div>
  );
};


export default Gallary;