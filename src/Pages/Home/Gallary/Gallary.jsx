import { useEffect, useState } from "react";
import GallaryCard from "./GallaryCard";

 

const Gallary = () => {
    const [gallery, setGallery] = useState([]);
    

    useEffect( () => {
        fetch('cars.json')
        .then(res => res.json())
        .then(data => setGallery(data))
    }, [])
    return (
        <div>
            <h2 className="text-center text-4xl font-bold mt-16 mb-12">Trending Cars</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                gallery.map(cars => <GallaryCard
                key={gallery._id}
                cars={cars}
                ></GallaryCard> )
                }
            </div>
        </div>
    );
};

export default Gallary;