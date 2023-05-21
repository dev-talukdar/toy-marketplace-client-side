import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../../Firebase/firebase.config";
import useTitle from "../../../hooks/useTitle";

const auth = getAuth(app)

 

const Register = () => {
    useTitle('Wheels Ville | Register')
    const [error, setError] = useState('')
    const {createUser} = useContext(AuthContext)


    const handleSignUp = event => { 
        event.preventDefault();
        
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photoUrl = form.photoUrl.value;
        console.log(name, email, password, confirm, photoUrl)

        setError('')

        if(password !== confirm){
            setError('Your password did not match')
            return
        }
        else if(password.length < 6){
            setError('Your password should be 6 character longer')
            return 
        }

        createUser(email, password, name, photoUrl)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)

            updateProfile(auth.currentUser, {
                displayName: name, photoURL: photoUrl
            })
            .then(() =>{

            })
            .catch((error) => {
                console.log(error)

            });

            form.reset(); 
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
            
        })

        

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12 "> 
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} >
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center">Sign up</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirm' placeholder="Enter your password" className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name='photoUrl' placeholder="Enter url of the photo" className="input input-bordered" required />
                        </div>
                    <p><small className="text-red-500 text-center">{error}</small></p>

                        <div className="form-control mt-6"> 
                            <input className="btn btn-primary" type="submit" value='Sign up' />
                            <p className='text-center mt-3'><small>Have an existing account?  Please <Link className='text-primary font-semibold' to={'/login'}> Login</Link> </small></p>
                        </div>
                    </div> 
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;