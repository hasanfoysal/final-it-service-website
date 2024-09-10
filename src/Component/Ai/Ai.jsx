import { Link } from 'react-router-dom';
import img from '../../assets/software-developer-with-eeg-headset-writing-code_482257-91067.avif'
import { Fade } from 'react-awesome-reveal';
import Design from '../Design/Design';
const Ai = () => {
    return (
        <div>
            <div className="hero bg-zinc-800 text-white   min-h-screen">
            <div className='w-full h-screen absolute lg:mt-48 mt-28 bg-zinc-800 top-0 left-0'> 
                <Design></Design>
<div className="hero-content bg-zinc-800 flex-col lg:max-w-[1400px] mx-auto  lg:flex-row-reverse">
    <Fade direction='right'><img 
      src={img}
      className="max-w-sm rounded-lg shadow-2xl mx-auto lg:w-[400px] lg:h-[500px] w-[300px] h-[300px] " /></Fade>
    <div className='lg:mr-20'>
  
      <Fade direction='up' delay='o.4'><h1 className="lg:text-5xl text-3xl font-bold">We Offer You AI/Deep Learning Engineer!</h1></Fade>
      <Fade direction='up' delay='o.6'><p className="py-6 ">
      An AI/Deep Learning Engineer is a specialist who develops and implements artificial intelligence (AI) and deep learning algorithms. They work on tasks such as data analysis, model development, and algorithm optimization. These engineers use programming languages like Python and TensorFlow to build AI systems that can perform tasks like image recognition, natural language processing, and predictive analytics. </p></Fade>
     <Fade direction='up' delay='o.8'><Link to='/contact'> <button className="uppercase transition duration-300 ease-in-out hover:scale-110 bg-orange-600 shadow-md shadow-white text-emerald-50 px-4 mt-2 py-2 rounded-full">contact us</button></Link></Fade>
    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Ai;