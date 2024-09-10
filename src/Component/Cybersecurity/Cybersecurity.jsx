import { Link } from 'react-router-dom';
import img from '../../assets/360_F_245636933_kY23ohGptK5t6n8wGSXIgLgVXWeHJRct.jpg'
import { Fade } from 'react-awesome-reveal';
import Design from '../Design/Design';

const Cybersecurity = () => {
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
  
      <Fade direction='up' delay='o.4'><h1 className="lg:text-5xl text-3xl font-bold">We Offer You Cybersecurity Specialist!</h1></Fade>
      <Fade direction='up' delay='o.6'><p className="py-6 ">
      Cybersecurity Specialists are professionals who protect computer systems, networks, and data from cyber threats. They are responsible for implementing security measures, monitoring networks for vulnerabilities, responding to security incidents, and educating users about cybersecurity best practices. Cybersecurity Specialists need strong technical skills, problem-solving abilities, and a deep understanding of cybersecurity principles and technologies. </p></Fade>
     <Fade direction='up' delay='o.8'><Link to='/contact'> <button className="uppercase transition duration-300 ease-in-out hover:scale-110 bg-orange-600 shadow-md shadow-white text-emerald-50 px-4 mt-2 py-2 rounded-full">contact us</button></Link></Fade>
    </div>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Cybersecurity;