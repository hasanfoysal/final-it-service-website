
import { HiMiniCodeBracket } from 'react-icons/hi2';
import img from '../../assets/startup-593341_1280.jpg'
import { FaKeyboard, FaUsersCog } from 'react-icons/fa';
import { MdAdminPanelSettings, MdOutlineEngineering } from 'react-icons/md';
import { GiPencilBrush } from 'react-icons/gi';
import LetterPullup from '../LetterPullUp';
import { Fade } from 'react-awesome-reveal';
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
<a className='text-blue-700' href="/app"><li> App Developer</li></a>
  <a className='text-blue-700' href="/game"><li>Game Developer</li></a>
  <a className='text-blue-700' href="/mobile"><li>Mobile Developer</li></a>
  <a className='text-blue-700' href="/software"><li>Software Developer</li></a>
  <a className='text-blue-700' href="/full"><li>Full-Stack Web Developer</li></a>
  <a className='text-blue-700' href="/front"><li>Front-End Web Developer</li></a>
  <a className='text-blue-700' href="/back"><li>Back-End Web Developer</li></a>
  <a className='text-blue-700' href="/block"><li>Blockchain Developer</li></a>

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
 <a className='text-blue-700' href="/c"><li> C Programmer</li></a>
 <a className='text-blue-700' href="/python"><li>Python Programmer</li></a>
 <a className='text-blue-700' href="/java"><li>Java Programmer</li></a>
 <a className='text-blue-700' href="/ai"><li>AI/Deep Learning Engineer</li></a>
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
 <a className='text-blue-700' href="/dev"><li>DevOps Engineer</li></a>
 <a className='text-blue-700' href="/cloud"><li>Cloud Architect/Engineer</li></a>
 <a className='text-blue-700' href="/cyber"><li>Cybersecurity Specialist</li></a>
 <a className='text-blue-700' href="/pene"><li>Penetration Tester</li></a>
 <a className='text-blue-700' href="/machine"><li>Machine Learning Engineer</li></a>

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
 <a className='text-blue-700' href="/network"><li>Network Administrator</li></a>
 <a className='text-blue-700' href="/system"><li>System Administrator</li></a>
 <a className='text-blue-700' href="/database"><li>Database Administrator</li></a>
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
 <a className='text-blue-700' href="/graphic"><li>Graphic Designer</li></a>
 <a className='text-blue-700' href="/ui"><li>UI/UX Designer</li></a>
 <a className='text-blue-700' href="/video"><li>Video Editor</li></a>
 <a className='text-blue-700' href="/content"><li>Content Writer/Copywriter</li></a>
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
 <a className='text-blue-700' href="/project"><li>Project Manager</li></a>
 <a className='text-blue-700' href="/product"><li>Product Manager</li></a>
 <a className='text-blue-700' href="/hr"><li>HR Manager</li></a>
 <a className='text-blue-700' href="/business"><li>Business Analyst</li></a>
 <a className='text-blue-700' href="/it"><li>IT Consultant</li></a>
 <a className='text-blue-700' href="/client"><li>Client Handler</li></a>
 <a className='text-blue-700' href="/tech"><li>Technical Support Specialist</li></a>
 <a className='text-blue-700' href="/quality"><li>Quality Assurance (QA) Engineer</li></a>
 <a className='text-blue-700' href="/seo"><li>SEO/Marketing Officer</li></a>

  </div>
</div>
</div></Fade>
</div>

        </div>
    );
};

export default Services;