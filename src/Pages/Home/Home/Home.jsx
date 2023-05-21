import HomeBannerOne from "../../HomeBannerOne/HomeBannerOne";
import Banner from "../../Shared/Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
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
           <AboutUs></AboutUs>
        </div>
    );
};

export default Home;