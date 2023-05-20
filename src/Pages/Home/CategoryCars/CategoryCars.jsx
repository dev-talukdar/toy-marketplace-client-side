import { useEffect,  } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

 

const CategoryCars = () => { 

    // const [category, setCategory] = useState([]);
   

  useEffect(() => {
    fetch('http://localhost:5000/cars')
      .then(res => res.json())
      .then(data => console.log(data))
  }, []);

    return (
        <div className="flex justify-center">
        <Tabs>
          <TabList  >
            <div className="flex gap-16 font-bold text-orange-600 bg-base-200 p-5">
            <Tab>Car</Tab> 
            <Tab>Police Car</Tab>
            <Tab>Ambulance</Tab>
            <Tab>Van</Tab>
            <Tab>Bus</Tab>
            <Tab>Truck</Tab>
            </div>
          </TabList>
      
          <TabPanel>
            <p>
              
            </p>
            <p>
              Source:{' '}
              <Link>
                
              </Link>
            </p>
          </TabPanel> 

          <TabPanel>
            <p>
              
            </p>
            <p>
              what :{' '}
              <Link>
                
              </Link>
            </p>
          </TabPanel> 

          <TabPanel>
            <p>
              
            </p>
            <p>
              Source:{' '}
              <Link>
                
              </Link>
            </p>
          </TabPanel> 

          <TabPanel>
            <p>
              
            </p>
            <p>
              Source:{' '}
              <Link>
                
              </Link>
            </p>
          </TabPanel> 

          <TabPanel>
            <p>
              
            </p>
            <p>
              Source:{' '}
              <Link>
                
              </Link>
            </p>
          </TabPanel> 

          <TabPanel>
            <p>
              
            </p>
            <p>
              Source:{' '}
              <Link>
                
              </Link>
            </p>
          </TabPanel> 
        </Tabs>
        </div>
    );
};

export default CategoryCars;