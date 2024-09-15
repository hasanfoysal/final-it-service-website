import { Link } from 'react-router-dom';
import img from '../../assets/photo-1572044162444-ad60f128bdea.jpeg'
import { Fade } from 'react-awesome-reveal';
import Design from '../Design/Design';

const Graphic = () => {
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
  
      <Fade direction='up' delay='o.4'><h1 className="lg:text-5xl text-3xl font-bold">We Offer You Graphic Designer!</h1></Fade>
      <Fade direction='up' delay='o.6'><p className="py-6 ">
      A graphic designer is a professional who creates visual concepts, using computer software to develop images for print and digital media. They combine creativity with technical skills to produce designs for a variety of purposes, such as advertising, branding, and packaging. Graphic designers work in a variety of industries, including marketing, publishing, and web design.</p></Fade>
      <Fade direction='up' delay='o.6'><p className="py-6 text-xl">
       Please fill the form by clicking the form button below to reach the service of your choice.
      </p></Fade>
     <Fade direction='up' delay='o.8'><Link to='/form'> <button className="uppercase transition duration-300 ease-in-out hover:scale-110 bg-orange-600 shadow-md shadow-white text-emerald-50 px-4 mt-2 py-2 rounded-full">Form</button></Link></Fade>
    </div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Graphic;