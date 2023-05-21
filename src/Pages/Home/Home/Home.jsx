import useTitle from "../../../hooks/useTitle";
import HomeBannerOne from "../../HomeBannerOne/HomeBannerOne";
import HomeBannerTwo from "../../HomeBannerOne/HomeBannerTwo";
import Banner from "../../Shared/Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";  
import Gallary from "../Gallary/Gallary";
import Testimonial from "../Testimonial/Testimonial";

 

 

const Home = () => {
    useTitle('Wheels Ville | Home')
    return (
        <div>
           <Banner></Banner>
           <Gallary></Gallary>
            <HomeBannerOne></HomeBannerOne> 
           <Testimonial></Testimonial>
           <HomeBannerTwo></HomeBannerTwo>
           <AboutUs></AboutUs>
        </div>
    );
};

export default Home;