import HomeBannerOne from "../../HomeBannerOne/HomeBannerOne";
import Banner from "../../Shared/Banner/Banner";
import CategoryCars from "../CategoryCars/CategoryCars";
import Gallary from "../Gallary/Gallary";
import Testimonial from "../Testimonial/Testimonial";

 

 

const Home = () => {
    return (
        <div>
            <HomeBannerOne></HomeBannerOne>
           <Banner></Banner>
           <Gallary></Gallary>
           <CategoryCars></CategoryCars>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;