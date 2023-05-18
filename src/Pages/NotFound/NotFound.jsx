import { Link } from "react-router-dom";

 

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen ">
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg ">
        <div className="mb-6">
            <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt="" className="w-full" />
        </div>
        <div className="text-center">
            <p className="text-2xl font-bold mb-2">Oops! Page not found.</p>
            <p className="text-gray-700 mb-6">
                The page you are looking for does not exist.
            </p>
            <button className="btn btn-warning">
                <Link className="text-white text-lg font-medium" to="/">
                    Back to Home
                </Link>
            </button>
        </div>
    </div>
</div>

    );
};

export default NotFound;