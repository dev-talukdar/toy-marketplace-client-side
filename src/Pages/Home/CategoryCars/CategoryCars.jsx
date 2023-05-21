import { useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CategoryCards from "./CategoryCards";



const CategoryCars = () => {

    const [category, setCategory] = useState([]); 
    const [activeTab, setActiveTab] =useState('PoliceCar');
     

    useEffect(() => {
        fetch('https://toy-marketplace-server-side-sigma.vercel.app/cars')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [activeTab]); 

    const handleTabClick = tabName =>{
        setActiveTab(tabName)
    }

    return (
        <div className="flex justify-center mt-16 mb-16">
            <Tabs>
                <TabList  >
                    <div className="flex gap-16 font-bold text-orange-600 bg-base-200 p-5 hover:cursor-pointer mb-4">
                        <Tab onClick={handleTabClick} >Car</Tab>
                        <Tab  onClick={handleTabClick} >Police Car</Tab>
                        <Tab  onClick={handleTabClick} >Ambulance</Tab>
                        <Tab  onClick={handleTabClick} >Van</Tab>
                        <Tab  onClick={handleTabClick} >Bus</Tab>
                        <Tab  onClick={handleTabClick} >Truck</Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        {category.map(cars => {
                            <CategoryCards 
                            key={cars._id}
                            cars={cars}
                            ></CategoryCards>

                        })}
                        <figure className="px-10 pt-10">
                            <img src='' alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">name</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>
                    <Link>

                    </Link>

                </TabPanel>

                <TabPanel>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Police Car</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>
                    <Link>

                    </Link>

                </TabPanel>

                <TabPanel>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Ambulance</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>

                    <Link>

                    </Link>

                </TabPanel>

                <TabPanel>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Van</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>
                    <Link>

                    </Link>
                </TabPanel>

                <TabPanel>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Bus</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>
                    <Link>

                    </Link>
                </TabPanel>

                <TabPanel>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Truck</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>

                    <Link>

                    </Link>
                </TabPanel>
            </Tabs>  
            </div>
            );
};

            export default CategoryCars;