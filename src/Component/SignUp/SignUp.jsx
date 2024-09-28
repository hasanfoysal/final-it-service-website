import Lottie from "lottie-react";
import regi from '../../../public/login.json'
import { Link } from "react-router-dom";
const SignUp = () => {
    return (
        <div>
             <div>
        <div className="hero min-h-screen bg-base-200" >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left mt-16">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p>

                <Lottie animationData={regi}/>
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-blue-500">
            <form  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <input 
                 placeholder="password" 
                 name='password' 
                 className="input input-bordered"
                  required /><span className="absolute top-14 left-48 lg:left-[280px]">
                  </span>
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary">Register</button>
              </div>
              <div className='my-5'>
              
               <div className='flex align-middle justify-center gap-2'>
                
               </div>
               <h3 className='text-center'>Already have an account? <Link className='text-sky-500 font-semibold' to='/login'>Login</Link> </h3>
              </div>
            </form> 
          </div>
        </div>
      </div>
      </div>
        </div>
    );
};

export default SignUp;