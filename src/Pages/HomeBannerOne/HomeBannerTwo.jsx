import homepagebanner1 from '../../assets/images/banner/homepagebanner1.jpg'

const HomeBannerTwo = () => {
    return (
        <div className="carousel-item container mx-auto relative w-full mb-8 hidden lg:flex">
        <img src={homepagebanner1} className="w-full" />
        <div className="absolute flex items-center h-full left-0 top-0 justify-start bg-gradient-to-r from-[#f98900] to-[rgba(21, 21, 21, 0)]">
            <div className='ms-4 md:ms-32 pl-4 md:pl-16'>
                <h2 className='text-white text-2xl md:text-4xl font-bold'>Up to 40% Off <br /> Pick Your Favourite Car</h2>
                <div className='mt-4 md:mt-8'>
                    <button className="btn bg-orange-600 border-none mr-2 md:mr-6">Browse By Category</button>
                    <button className="btn btn-outline btn-warning">Trending Cars</button>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default HomeBannerTwo;