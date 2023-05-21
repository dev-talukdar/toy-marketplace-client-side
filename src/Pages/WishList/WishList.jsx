import { useEffect, useState, } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CategoryCards from "../Home/CategoryCars/CategoryCards";

const WishList = () => {

    const [category, setCategory] = useState([]);
    const [activeTab, setActiveTab] = useState('PoliceCar');


    useEffect(() => {
        fetch('https://toy-marketplace-server-side-sigma.vercel.app/cars')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [activeTab]);

    console.log(category)

    const handleTabClick = tabName => {
        setActiveTab(tabName)
    }


    return (
        <div className="lg:px-16 max-sm:px-8">
            <div className="text-center mb-[40px]">
                <h2 className="text-4xl font-black">Categories</h2>
                <p className="py-8">
                    Buy your favorite toy for your kids. Our Car bring a decent pleasure to your kids mind, so they can grow with happiness.
                </p>
            </div>

            <Tabs forceRenderTabPanel defaultIndex={1}>

                <TabList className="text-center">
                    <Tab onClick={() => handleTabClick('police car')}>Car</Tab>
                    <Tab onClick={() => handleTabClick('police car')}>Ambulance</Tab>
                    <Tab onClick={() => handleTabClick('police car')}>Bus</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                            category.map((subCat) => {
                                <CategoryCards
                                    key={subCat._id}
                                    subCat={subCat}
                                ></CategoryCards>
                            })
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                            category.map((subCat) => {
                                <CategoryCards
                                    key={subCat._id}
                                    subCat={subCat}
                                ></CategoryCards>
                            })
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                            category.map((subCat) => {
                                <CategoryCards
                                    key={subCat._id}
                                    subCat={subCat}
                                ></CategoryCards>
                            })
                        }
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default WishList;