import { Link } from 'react-router-dom';
import img from '../../assets/quality-assurance-certification-certified-internet-260nw-2031803537.webp'
import { Fade } from 'react-awesome-reveal';
import Design from '../Design/Design';

const Quality = () => {
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
  
      <Fade direction='up' delay='o.4'><h1 className="lg:text-5xl text-3xl font-bold">We Offer You Quality Assurance (QA) Engineer!</h1></Fade>
      <Fade direction='up' delay='o.6'><p className="py-6 ">
      A Quality Assurance (QA) Engineer is responsible for ensuring the quality and reliability of software products. They design and implement test plans, execute tests, identify defects, and work closely with developers to resolve issues. QA Engineers play a crucial role in ensuring that software meets customer expectations and is free from bugs before release.</p></Fade>
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

export default Quality;