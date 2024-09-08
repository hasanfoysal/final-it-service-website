import { Fade } from 'react-awesome-reveal';
import img from '../../assets/man-1839500_1280.jpg'
import { FadeText } from '../FadeText';


const Banner = () => {


    return (
     
        <div className=''>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${img})`}}>
  <div className="hero-overlay bg-opacity-60 min-h-screen shadow-2xl "><img className='opacity-50 ' /></div>
  <div className="hero-content text-center text-neutral-content">
 <div>
    <div className='pt-24'>
 <FadeText
        className="mb-4 text-xl text-white font-bold pt-20"
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.2 } },
        }}
        text="This is the Global IT Service Center."
      /></div>
{/* <h1 className="mb-4 text-xl text-white font-bold pt-20">This is the Global IT Service Center.  
      </h1> */}
      <div><Fade direction='up' ><p className=" lg:text-7xl pb-4 md:text-4xl text-2xl text-white font-bold">Welcome to <span className='text-orange-500'>LM GROUP  </span> </p></Fade> </div>
      <FadeText
        className=' font-semibold lg:my-8 text-slate-100 '
        direction="up"
        framerProps={{
          show: { transition: { delay: 0.6 } },
        }}
        text="At LM GROUP, we are committed to advancing your business by providing modern IT solutions that align with your specific needs.  
Our expertise spans various areas of development, engineering, design, and management, ensuring that you receive integrated and innovative services that take your business to new heights.  
Join us today and move forward with us in shaping the future of technology."
      />
      {/* <p className=' font-semibold lg:my-8 text-slate-100 '>At LM GROUP, we are committed to advancing your business by providing modern IT solutions that align with your specific needs.  
Our expertise spans various areas of development, engineering, design, and management, ensuring that you receive integrated and innovative services that take your business to new heights.  
Join us today and move forward with us in shaping the future of technology.</p> */}
      
    </div>
  </div>
 
</div>
</div>

    );
};

export default Banner;