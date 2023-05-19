import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../Firebase/firebase.config";

 

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider()

    const handleLogin = event => {
        event.preventDefault() 

        const form = event.target; 
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)        

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from)
        })
        .catch(error => {
            console.log(error)
        }) 
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user
            console.log(user)
            navigate(from)
        })
    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12 "> 
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}>
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Enter your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6"> 
                            <input className="btn btn-primary" type="submit" value='Login' />
                            <p className='text-center mt-3'><small>New to <span className="text-orange-400"> Wheels ville</span> Please <Link className='text-primary font-semibold' to={'/signup'}> Register</Link> </small></p>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-bold text-center mb-8'>Login with</h4>
                        
                        <div className='grid grid-row-3 mb-8 mx-3 gap-3'>  
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-error text-3xl"><FaGoogle></FaGoogle></button>  

                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;