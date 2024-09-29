
import BoxReveal from '../../BoxReveal/BoxReveal'
import img from '../../assets/contact-us-6933645_1280.jpg'
import { IoIosSend } from "react-icons/io";
import LetterPullup from '../LetterPullUp';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bl5akzk', 'template_6rntt4l', form.current, {
        publicKey: 'Ia5ZLSh7fNAdH5kwx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message sent",
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        },
      );
  };
  return (
    <div>
            <div className="hero" style={{backgroundImage: `url(${img})`}}>
  <div className="hero-overlay bg-opacity-60 h-[400px] shadow-2xl "><img className='opacity-50 ' /></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
    
      <div> 
      <LetterPullup className='lg:text-7xl text-4xl pb-4 md:text-4xl  text-white font-bold' words={" Contact Us "} delay={0.1} />;
        </div>
    
      
    </div>
  </div>
 
</div>


<div className="bg-zinc-700 min-h-svh text-white pt-20" >
           <h1 className="text-center bg-orange-600 text-white font-bold my-4  ml-[80px] md:ml-[200px] lg:ml-[800px] justify-center text-3xl btn btn-outline border-0 border-b-4 shadow-md   shadow-black mt-20">Contact Us</h1>
<div className="flex flex-col lg:flex-row md:flex-row lg:max-w-[1200px] mx-auto shadow-lg shadow-orange-600 justify-between ">
            <div className="card bg-base-100 w-64 md:w-80 mx-auto my-20 lg:w-[500px] border border-orange-600  shadow-orange-600 shadow-sm">
  
  <div className="card-body bg-black text-white">
  <BoxReveal boxColor={"#FFA600"} duration={0.7}> <h2 className="card-title mb-3">Contact us with your questions, comments, or service requests. Our team will always be at your side and respond quickly.</h2></BoxReveal>
  <BoxReveal boxColor={"#FFA600"} duration={0.7}><li className="lg:text-xl"><span className="text-slate-100 lg:text-lg">phone:</span>+880 1820903619</li></BoxReveal>
  <BoxReveal boxColor={"#FFA600"} duration={0.7}><li className="lg:text-xl sm:text-lg "><span className="text-slate-100 lg:text-lg">Email:</span>lmgroup442@gmail.com</li></BoxReveal>
  <BoxReveal boxColor={"#FFA600"} duration={0.7}><li className="lg:text-xl"><span className="text-slate-100 lg:text-lg">Location:</span> Dhaka,Bangladesh</li></BoxReveal>
  <BoxReveal boxColor={"#FFA600"} duration={0.7}>

     <div className='lg:mt-6 mt-3 md:mt-4 flex space-x-4'>
      <a href="https://www.linkedin.com/in/lm-group04/" target="blank"><img className='w-7 h-7' align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="" height="30" width="40" /></a>
      <a href="https://www.facebook.com/profile.php?id=61564501409288" target="blank"><img className='w-7 h-7' align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="https://www.facebook.com/profile.php?id=100009256108068&mibextid=ZbWKwL" height="30" width="40" /></a>
      <a href="https://www.instagram.com/lmgroup4/" target="blank"><img className='w-7 h-7' align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="" height="30" width="40" /></a>
      <a href="https://www.pinterest.com/lmgroup04/" target="blank"><img className='w-7 h-7' align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/pinterest.svg" alt="" height="30" width="40" /></a>
      <a href="https://x.com/lmgroup04" target="blank"><img className='w-7 h-7' align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="" height="30" width="40" /></a>
      </div>
  </BoxReveal>


  </div>
</div>
<div  className="card bg-zinc-700 text-white w-64 md:w-80 mx-auto my-20 lg:w-[500px] border border-orange-600  shadow-orange-600 shadow-sm">
  <div className="card-body bg-black text-white">
  <form ref={form} onSubmit={sendEmail}>
  <BoxReveal boxColor={"#FFA600"} duration={0.7}><label className="input input-bordered flex items-center w-48 bg-white lg:w-96 text-black gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text"  name="to_name" className="grow" placeholder="Username" />
</label></BoxReveal>
<BoxReveal boxColor={"#FFA600"} duration={0.7}><label className="input input-bordered flex w-48 lg:w-96 items-center mt-2 bg-white text-black gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="email" name="from_name" className="grow" placeholder="Email" />
</label></BoxReveal>

<BoxReveal boxColor={"#FFA600"} duration={0.7}><label className="input input-bordered flex w-48 lg:w-96 items-center pt-6 py-24 bg-white text-black mt-2 gap-2">
<IoIosSend />
  <input  type="text" name="message" className="grow " placeholder="Enter your message" />
</label></BoxReveal>

<BoxReveal boxColor={"#FFA600"} duration={0.7}><input className="btn btn-outline mt-4 border-orange-600 text-white shadow-md  shadow-orange-600  hover:bg-orange-600 hover:text-white" type="submit" value="Send" /></BoxReveal>
   </form>
    
  </div>
</div>
</div>
</div>
    </div>
  );
};

export default Contact;