import { Link } from "react-router-dom";

 

const Register = () => {
    const handleSignUp = event => { 
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        // createUser(email, password)
        .then(result =>{
            const user  =result.user;
            console.log(user)
        })
        .then(error => console.log(error))

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
                            <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Enter your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name='photoUrl' placeholder="Enter url of the photo" className="input input-bordered" />
                        </div>

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