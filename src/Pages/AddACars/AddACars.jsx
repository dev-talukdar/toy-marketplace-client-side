 import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddACars = () => {

    useTitle('Wheels Ville | Add a Cars')

    const handleAddCar = event => {
        event.preventDefault()

        const form = event.target;

        const photoUrl = form.photoUrl.value;
        const productName = form.productName.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;

        const newCar ={photoUrl, productName, sellerName, email, subCategory, price, rating, availableQuantity}
        console.log(newCar)

        fetch('https://toy-marketplace-server-side-sigma.vercel.app/addCar', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(newCar)
        })
        .then(res => res.json())
        .then(data => {
             console.log(data)
             if(data.insertedId){
                Swal.fire({
                    title: "Success",
                    text: "A new car added successfully",
                    icon: "success",
                    confirmButtonText: "Great" 
                })
                form.reset()
             }
            })

    }
    

    return (
        <div className="container mx-auto mt-16 mb-16">
            <h2 className='text-center font-medium'>Add A Car</h2>
            <form onSubmit={handleAddCar} className="px-4"  >
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Photo URL</label>
                                <div className="mt-2">
                                    <input type="text" name="photoUrl" autoComplete="given-name" className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Product Name</label>
                                <div className="mt-2">
                                    <input type="text" name="productName"   autoComplete="family-name" className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div> 

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Seller Name</label>
                                <div className="mt-2">
                                    <input type="text" name="sellerName" autoComplete="given-name" className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Seller Email</label>
                                <div className="mt-2">
                                    <input type="email" name="email"  autoComplete="family-name" className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Sub Category</label>
                                <div className="mt-2">
                                    <input type="text" name="subCategory" autoComplete="given-name" className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
                                <div className="mt-2">
                                    <input type="number" name="price" autoComplete="family-name" className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Rating</label>
                                <div className="mt-2">
                                    <input type="number" name="rating" autoComplete="given-name" className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Available Quantity</label>
                                <div className="mt-2">
                                    <input type="number" name="availableQuantity"  autoComplete="family-name" className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>


                        <div className="col-span-full">
                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Product Description</label>
                            <div className="mt-2">
                                <textarea id="about" name="productDescription" rows="3" className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"></textarea>
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Write a short description about your product.</p>
                        </div>

                    </div> 

                </div>

                <div className="mt-6 flex justify-center  gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button type="submit" className="btn-btn-block rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddACars;