import HomeBannerOne from "../../HomeBannerOne/HomeBannerOne";
import Banner from "../../Shared/Banner/Banner";
import CategoryCars from "../CategoryCars/CategoryCars";
import Gallary from "../Gallary/Gallary";

 

 

const Home = () => {
    return (
        <div>
            <HomeBannerOne></HomeBannerOne>
           <Banner></Banner>
           <Gallary></Gallary>
           <CategoryCars></CategoryCars>
        </div>
    );
};

export default Home;