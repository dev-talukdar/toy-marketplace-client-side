import { useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CategoryCards from "./CategoryCards";



const CategoryCars = () => {

    const [category, setCategory] = useState([]); 
     

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);

    return (
        <div className="flex justify-center mt-16 mb-16">
            <Tabs>
                <TabList  >
                    <div className="flex gap-16 font-bold text-orange-600 bg-base-200 p-5 hover:cursor-pointer mb-4">
                        <Tab >Car</Tab>
                        <Tab>Police Car</Tab>
                        <Tab>Ambulance</Tab>
                        <Tab>Van</Tab>
                        <Tab>Bus</Tab>
                        <Tab>Truck</Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        {category.map(cars => {
                            <CategoryCards 
                            key={cars._id}
                            cars={cars}
                            />

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