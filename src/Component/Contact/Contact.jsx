import Lottie from 'lottie-react';
import lottie from '../../../public/xfOgef2BEy (1).json'
import LetterPullup from '../LetterPullUp';
const Contact = () => {
    return (
        <div className='sm:bg-white'>
             <h1 className="text-center text-black font-bold my-4  ml-[70px] md:ml-[200px] lg:ml-[700px] justify-center text-3xl btn btn-outline border-0 border-b-4 shadow-md   shadow-black mt-24">Contact Us</h1>
             <div>
             <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Lottie animationData={lottie}></Lottie>
    <div>
      
      <h1 className="text-xl font-bold">If your business needs reliable and innovative IT solutions, LM GROUP can be your right partner. We are ready and committed to meet all your technical needs.</h1>
      <p className="py-6 font-semibold">
      Contact us with your questions, comments, or service requests. Our team will always be at your side and respond quickly.
      </p>
      <p className='py-4 font-semibold'>Contact us today to discuss your requirements and let's move your business forward together.</p>
      <p className='py-4 font-semibold'>Contact Address:</p>
      <p className='text-orange-500 font-bold'>Email: lmgroup442@gmail.com</p>
      <p className='text-orange-500 font-bold'>Phone: [+880 1820903619]</p>
      <p className='py-6 text-2xl font-extrabold'>We look forward to serving you!</p>
    </div>
  </div>
</div>
             </div>
        </div>
    );
};

export default Contact;