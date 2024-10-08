
import { HiMiniCodeBracket } from 'react-icons/hi2';
import img from '../../assets/startup-593341_1280.jpg'
import { FaKeyboard, FaUsersCog } from 'react-icons/fa';
import { MdAdminPanelSettings, MdOutlineEngineering } from 'react-icons/md';
import { GiPencilBrush } from 'react-icons/gi';
import LetterPullup from '../LetterPullUp';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
const Services = () => {
    return (
        <div>
                    <div className="hero" style={{backgroundImage: `url(${img})`}}>
  <div className="hero-overlay bg-opacity-60 h-[400px] shadow-2xl "><img className='opacity-50 ' /></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
    
      <div> 
      <LetterPullup className='lg:text-7xl text-4xl pb-4 md:text-4xl  text-white font-bold' words={" Services "} delay={0.1} />;
        {/* <p className=" lg:text-7xl text-4xl pb-4 md:text-4xl  text-white font-bold"> Services  </p> */}
        </div>
    
      
    </div>
  </div>
 
</div>
<div className='bg-zinc-700 text-white min-h-screen pt-10'>
<Fade direction='left'><div className="flex flex-col lg:flex-row md:flex-row justify-between  lg:max-w-[1300px] mx-auto sm:mt-8 md:mt-10 lg:mt-12">
            <div className="card bg-base-100 w-64 md:w-80 transition duration-300 ease-in-out hover:scale-110 mx-auto my-3 lg:w-96 shadow-orange-500 shadow-md">
       <figure className='bg-black pr-2 pl-4'>
   <div>
   <p className="text-7xl text-orange-500"><HiMiniCodeBracket />
    </p>
    <p className='pb-2'>Our adept developers specialize in crafting cutting-edge solutions tailored to your unique needs. From bespoke software applications to scalable web platforms, we ensure optimal performance and exceptional user satisfaction. Whether launching a new app or enhancing an existing system, our commitment to excellence drives our results. </p>
    <hr />

   </div>
  </figure>
 <div className="card-body bg-black text-white ">
  <p className="text-2xl text-orange-500">Developer </p>
  <Link className='text-blue-700' to='/app'><li> App Developer</li></Link>
  <Link className='text-blue-700' to='/game'><li> Game Developer</li></Link>
  <Link className='text-blue-700' to='/mobile'><li> Mobile Developer</li></Link>
  <Link className='text-blue-700' to='/software'><li> Software Developer</li></Link>
  <Link className='text-blue-700' to='/full'><li> Full-Stack Web Developer</li></Link>
  <Link className='text-blue-700' to='/front'><li> Front-End Web Developer</li></Link>
  <Link className='text-blue-700' to='/back'><li> Back-End Web Developer</li></Link>
  <Link className='text-blue-700' to='/block'><li>Blockchain Developer</li></Link>

  </div>
</div>
<div className="card bg-base-100 w-64 md:w-80 mx-auto my-3 transition duration-300 ease-in-out hover:scale-110 lg:w-96 shadow-orange-500 shadow-md">
<figure className='bg-black pr-2 pl-4'>
   <div>
   <p className="text-7xl text-orange-500"><FaKeyboard />
    </p>
    <p className='pb-2 '> Our team of expert programmers excels in a variety of programming languages and frameworks. We deliver precise, reliable code that aligns with your specific requirements, ensuring robust functionality and seamless integration. Our focus on quality and efficiency guarantees that your technology solutions are both effective and future-proof.</p>
    <hr />
   </div>
  </figure>
  <div className="card-body bg-black text-white">
 <h2 className="card-title text-orange-500">Programmer:</h2>
 <Link className='text-blue-700' to='/c'><li> C Programmer</li></Link>
 <Link className='text-blue-700' to='/python'><li>Python Programmer</li></Link>
 <Link className='text-blue-700' to='/java'><li>Java Programmer</li></Link>
 <Link className='text-blue-700' to='/ai'><li>AI/Deep Learning Engineer</li></Link>
  </div>
</div>

<div className="card bg-base-100 w-64 md:w-80 mx-auto my-3 transition duration-300 ease-in-out hover:scale-110 lg:w-96 shadow-orange-500 shadow-md">
<figure className='bg-black pr-2 pl-4'>
   <div>
   <p className="text-7xl text-orange-500"><MdOutlineEngineering />
    </p>
    <p className='pb-2 pt-5'>Our engineers are dedicated to designing and deploying sophisticated systems and architectures that elevate your operational efficiency. We provide solutions that enhance the performance, security, and scalability of your infrastructure, ensuring your technology investments deliver substantial value.</p>
    <hr />
   </div>
  </figure>
  <div className="card-body bg-black text-white">
 <h2 className="card-title text-orange-500">Engineer:</h2>
 <Link className='text-blue-700' to='/dev'><li>DevOps Engineer</li></Link>
 <Link className='text-blue-700' to='/cloud'><li>Cloud Architect/Engineer</li></Link>
 {/* <Link className='text-blue-700' to='/cyber'><li>Cybersecurity Specialist</li></Link> */}
 <Link className='text-blue-700' to='/pene'><li>Penetration Tester</li></Link>
 <Link className='text-blue-700' to='/machine'><li>Machine Learning Engineer</li></Link>

  </div>
</div>
</div></Fade>
<Fade direction='right'><div className="flex flex-col lg:flex-row md:flex-row justify-between pb-24 lg:max-w-[1300px] mx-auto sm:mt-2 md:mt-4 lg:mt-6">
         <div className="card bg-base-100 w-64 md:w-80 transition duration-300 ease-in-out hover:scale-110 mx-auto my-3 lg:w-96 shadow-orange-500 shadow-md">
            <figure className='bg-black pr-2 pl-4'>
   <div>
   <p className="text-7xl text-orange-500"><MdAdminPanelSettings />
    </p>
    <p className='pb-2'>Our administrative team expertly manages and optimizes your IT systems to ensure uninterrupted operations and minimal downtime. From system configuration to user support, we handle all aspects of IT administration, allowing your business to function smoothly and efficiently.</p>
    <hr />
   </div>
  </figure>
  <div className="card-body bg-black text-white">
 <h2 className="card-title text-orange-500">Administrator:</h2>
 <Link className='text-blue-700' to='/network'><li>Network Administrator</li></Link>
 <Link className='text-blue-700' to='/system'><li>System Administrator</li></Link>
 <Link className='text-blue-700' to='/database'><li>Database Administrator</li></Link>
  </div>
</div>
<div className="card bg-base-100 w-64 md:w-80 mx-auto my-3 transition duration-300 ease-in-out hover:scale-110 lg:w-96 shadow-orange-500 shadow-md">
<figure className='bg-black pr-2 pl-4'>
   <div>
   <p className="text-7xl text-orange-500"><GiPencilBrush />
    </p>
    <p className='pb-2'>Our creative professionals excel in producing visually compelling and user-centric designs that elevate your brand. From website design to marketing collateral, we create visually engaging content that not only captures attention but also effectively communicates your brand's message to your target audience.</p>
    <hr />
   </div>
  </figure>
  <div className="card-body bg-black text-white">
 <h2 className="card-title text-orange-500">Designer/Creative:</h2>
 <Link className='text-blue-700' to='/graphic'><li>Graphic Designer</li></Link>
 <Link className='text-blue-700' to='/ui'><li>UI/UX Designer</li></Link>
 <Link className='text-blue-700' to='/video'><li>Video Editor</li></Link>
 <Link className='text-blue-700' to='/content'><li>Content Writer/Copywriter</li></Link>
  </div>
</div>

<div className="card bg-base-100 w-64 md:w-80 mx-auto my-3 transition duration-300 ease-in-out hover:scale-110 lg:w-96 shadow-orange-500 shadow-md">
<figure className='bg-black pr-2 pl-4'>
   <div>
   <p className="text-7xl text-orange-500"><FaUsersCog />
    </p>
    <p> Our management and support services encompass comprehensive project management, effective team coordination, and dedicated technical support. We focus on delivering projects within the agreed timeline and budget while offering continuous support to address any challenges that arise, ensuring sustained success</p>
   </div>
  </figure>
  <div className="card-body bg-black text-white">
 <h2 className="card-title text-orange-500">Management/Support:</h2>
 <Link className='text-blue-700' to='/project'><li>Project Manager</li></Link>
 <Link className='text-blue-700' to='/product'><li>Product Manager</li></Link>
 <Link className='text-blue-700' to='/hr'><li>HR Manager</li></Link>
 <Link className='text-blue-700' to='/business'><li>Business Analyst</li></Link>
 <Link className='text-blue-700' to='/it'><li>IT Consultant</li></Link>
 <Link className='text-blue-700' to='/client'><li>Client Handler</li></Link>
 <Link className='text-blue-700' to='/tech'><li>Technical Support Specialist</li></Link>
 <Link className='text-blue-700' to='/quality'><li>Quality Assurance (QA) Engineer</li></Link>
 <Link className='text-blue-700' to='/seo'><li>SEO/Marketing Officer</li></Link>
  </div>
</div>
</div></Fade>
</div>
<Footer></Footer>
        </div>
    );
};

export default Services;