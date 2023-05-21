import homepagebanner1 from '../../assets/images/banner/aa.jpg'

const HomeBannerOne = () => {
    return (
        <div className="carousel-item container mx-auto relative w-full mb-8 ">
        <img src={homepagebanner1} className="w-full" />
        <div className="absolute flex items-center h-full left-0 top-0 justify-start bg-gradient-to-r from-[#feae00] to-[rgba(21, 21, 21, 0)]">
            <div className='ms-4 md:ms-32 pl-4 md:pl-16 hidden lg:flex'>
                <h2 className='text-white text-2xl md:text-4xl font-bold'>Unbeatable Prices:  <br /> Grab the Hottest Deals Now!</h2>
                <div className='mt-4 md:mt-8'>
                    <button className="btn bg-orange-600 border-none mr-2 md:mr-6">Shop Now</button>
                    <button className="btn btn-outline btn-warning">Explore More</button>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default HomeBannerOne;