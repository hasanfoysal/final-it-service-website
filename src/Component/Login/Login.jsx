

import login from '../../../public/login.json';

import { Link } from 'react-router-dom';






import Lottie from 'lottie-react';




const Login = () => {
  
    return (
        <div >

        
        <div className="hero min-h-screen bg-base-200" >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left mt-16">
            <div>

                <Lottie animationData={login}/>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-blue-600 "data-aos="flip-left" data-aos-duration="2000">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <input 
                
                 placeholder="password" 
                 name='password' 
                 className="input input-bordered"
                  required /><span className="absolute top-14 left-48 lg:left-[280px]" >
                  
                  </span>
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary">Login</button>
              </div>
              <div className='my-5'>
                <hr />
               <h1 className='text-center'>Login with social account</h1>
               <div className='flex align-middle justify-center gap-2'>
               
            
                
               </div>
               <h3 className='text-center '>Do not have an account? <Link className='text-sky-500 font-semibold' to='/signUp'>Sign Up</Link> </h3>
              </div>
            </form>
         
          </div>
        </div>
      </div>
      </div>
    );
};

export default Login;