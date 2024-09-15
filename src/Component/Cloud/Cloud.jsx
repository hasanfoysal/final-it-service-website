import { Link } from 'react-router-dom';
import img from '../../assets/14_01edge-cloud-computing.jpg'
import { Fade } from 'react-awesome-reveal';
import Design from '../Design/Design';

const Cloud = () => {
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
  
      <Fade direction='up' delay='o.4'><h1 className="lg:text-5xl text-3xl font-bold">We Offer You Cloud Architect/Engineer!</h1></Fade>
      <Fade direction='up' delay='o.6'><p className="py-6 ">
      A Cloud Architect/Engineer is a technical professional responsible for designing, implementing, and managing cloud computing infrastructure. They work closely with businesses to understand their needs and develop cloud-based solutions that are scalable, reliable, and cost-effective. They have a deep understanding of cloud platforms like AWS, Azure, and GCP, and are skilled in various technologies such as virtualization, networking, and security. </p></Fade>
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

export default Cloud;