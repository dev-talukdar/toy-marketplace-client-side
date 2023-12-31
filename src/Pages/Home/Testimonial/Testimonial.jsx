import Marquee from "react-fast-marquee";
import avatar from '../../../assets/images/banner/Profile picture.jpg'
import avatar1 from '../../../assets/images/banner/261426624_642157877141965_2911059125286041729_n.jpg'
import avatar2 from '../../../assets/images/banner/315443943_10226598463320557_2142308620678575978_n.jpg'
import avatar3 from '../../../assets/images/banner/346981176_687210093163093_3103573473748702865_n.jpg'



const Testimonial = () => {
    return (

        <div className="container mx-auto ">
            <h2 className="text-center text-4xl font-semibold mt-10 mb-10">Client Feedback About Our Product</h2>
            <Marquee className="flex">
                 
                    <div className="card w-96 bg-base-100 ">
                        <figure className="avatar mt-3">
                            <div className="w-36 rounded-full">
                                <img src={avatar} />
                            </div>

                        </figure>
                        <div className="card-body text-center">
                            <h2 className="card-title">
                                                                
                            </h2>
                            <p>The customer service provided by this toy seller is exceptional. They were prompt in answering my questions and ensured a smooth buying experience. Highly recommended!  - John</p>
                             
                        </div> 
                    </div>
                

                
                    <div className="card w-96 bg-base-100 ">
                        <figure className="avatar mt-3">
                            <div className="w-36 rounded-full">
                                <img src={avatar1} />
                            </div>

                        </figure>
                        <div className="card-body text-center">
                            <h2 className="card-title">
                                                                
                            </h2>
                            <p>I was amazed by the quality and variety of toys available on this website. My kids absolutely love their new toys, and I could not be happier with my purchase.- Sarah</p>
                             
                        </div> 
                    </div>

                    <div className="card w-96 bg-base-100 ">
                        <figure className="avatar mt-3">
                            <div className="w-36 rounded-full">
                                <img src={avatar2} />
                            </div>

                        </figure>
                        <div className="card-body text-center">
                            <h2 className="card-title">
                                                                
                            </h2>
                            <p>The toys I received were exactly as described and arrived in perfect condition. The prices were reasonable, and the shipping was fast. I will definitely be buying from this website again.  - Emily</p>
                             
                        </div> 
                    </div>

                    <div className="card w-96 bg-base-100 ">
                        <figure className="avatar mt-3">
                            <div className="w-36 rounded-full">
                                <img src={avatar3} />
                            </div>

                        </figure>
                        <div className="card-body text-center">
                            <h2 className="card-title">
                                                                
                            </h2>
                            <p> As a parent, safety is my top priority when buying toys. I appreciate that this seller ensures all their products meet the highest safety standards. I feel confident in giving these toys to my children.  - Lisa</p>
                             
                        </div> 
                    </div>

                    <div className="card w-96 bg-base-100 ">
                        <figure className="avatar mt-3">
                            <div className="w-36 rounded-full">
                                <img src={avatar} />
                            </div>

                        </figure>
                        <div className="card-body text-center">
                            <h2 className="card-title">
                                                                
                            </h2>
                            <p>I ve been a loyal customer of this toy seller for years, and they never disappoint. The quality of their toys is consistently excellent, and their customer service is outstanding. Keep up the great work! - Mark</p>
                             
                        </div> 
                    </div>

                    <div className="card w-96 bg-base-100 ">
                        <figure className="avatar mt-3">
                            <div className="w-36 rounded-full">
                                <img src={avatar1} />
                            </div>

                        </figure>
                        <div className="card-body text-center">
                            <h2 className="card-title">
                                                                
                            </h2>
                            <p>The toys from this seller have brought so much joy to my little ones. Seeing their smiles and excitement is priceless. Thank you for providing such amazing toys that bring happiness to children  - Daniel</p>
                             
                        </div> 
                    </div>
                 
            </Marquee>

        </div>
    );
};

export default Testimonial;