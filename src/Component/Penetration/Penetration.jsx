import { Link } from 'react-router-dom';
import img from '../../assets/download (1).jpeg'
import { Fade } from 'react-awesome-reveal';
import Design from '../Design/Design';

const Penetration = () => {
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
  
      <Fade direction='up' delay='o.4'><h1 className="lg:text-5xl text-3xl font-bold">We Offer You Penetration Tester!</h1></Fade>
      <Fade direction='up' delay='o.6'><p className="py-6 ">
      A penetration tester, also known as a white-hat hacker, is a cybersecurity professional who simulates cyberattacks on systems, networks, and applications to identify vulnerabilities. They use various techniques and tools to gain unauthorized access to systems and assess the potential damage that could be caused by a malicious actor. Their findings are then used to improve security measures and protect against real-world attacks. </p></Fade>
     <Fade direction='up' delay='o.8'><Link to='/contact'> <button className="uppercase transition duration-300 ease-in-out hover:scale-110 bg-orange-600 shadow-md shadow-white text-emerald-50 px-4 mt-2 py-2 rounded-full">contact us</button></Link></Fade>
    </div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Penetration;