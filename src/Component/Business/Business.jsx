import { Link } from 'react-router-dom';
import img from '../../assets/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.avif'
import { Fade } from 'react-awesome-reveal';
import Design from '../Design/Design';

const Business = () => {
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
  
      <Fade direction='up' delay='o.4'><h1 className="lg:text-5xl text-3xl font-bold">We Offer You Business Analyst!</h1></Fade>
      <Fade direction='up' delay='o.6'><p className="py-6 ">
      A Business Analyst (BA) is a professional who bridges the gap between business needs and technical solutions. They work with stakeholders to understand their requirements and translate them into actionable specifications for development teams. BAs often conduct research, analyze data, and create process models to ensure that IT solutions align with business objectives. They play a crucial role in ensuring successful project outcomes and delivering value to the organization.</p></Fade>
     <Fade direction='up' delay='o.8'><Link to='/contact'> <button className="uppercase transition duration-300 ease-in-out hover:scale-110 bg-orange-600 shadow-md shadow-white text-emerald-50 px-4 mt-2 py-2 rounded-full">contact us</button></Link></Fade>
    </div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Business;