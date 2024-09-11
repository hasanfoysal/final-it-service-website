import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import { MdAdminPanelSettings, MdOutlineEngineering } from "react-icons/md";
import { FaKeyboard, FaUsersCog } from "react-icons/fa";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { GiPencilBrush } from "react-icons/gi";
import BoxReveal from '../../BoxReveal/BoxReveal'
import Footer from '../Footer/Footer'
import lottie from '../../../public/ijtlV4SM1y.json'
import Lottie from "lottie-react";
import { Fade } from "react-awesome-reveal";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           {/* service */}
          
           {/* about */}
           <div className="lg:max-w-[1500px] my-10  mx-auto">
           <h1 className="text-center bg-orange-600 text-white font-bold my-4  ml-[90px] md:ml-[200px] lg:ml-[800px] justify-center text-3xl btn btn-outline border-0 border-b-4 shadow-md   shadow-black mt-20">About</h1>
           <div className="lg:flex flex-row gap-10">
            <div>
              {/* img */}
              <Lottie animationData={lottie} ></Lottie>
            </div>

        <div>

<h3 className="text-2xl md:text-4xl pl-2 pt-6 lg:text-6xl text-blue-950 font-semibold"><span className="text-orange-600">Introduction</span>To The Best <br />IT Service Company!</h3>
<h1 className="pl-2 text-xl font-semibold py-4 mt-4 lg:text-2xl pr-1">LM GROUP: A Leading Technology Company</h1>
<h3 className="pl-2 text-l">
 <Fade direction="right" delay='.2'><li><span className="font-bold"> Established:</span> March 8, 2023</li></Fade>
 <Fade direction="right" delay='.4'><li><span className="font-bold">Registered:</span>  IT sector on August 22, 2024</li></Fade>
 <Fade direction="right" delay='.6'><li><span className="font-bold">Specialization:</span> Software development, design, and other technology services</li></Fade>
 <Fade direction="right" delay='.8'><li><span className="font-bold">Mission:</span> Provide innovative solutions for business success and customer convenience.</li></Fade>
 <Fade direction="right" delay='.10'> <li><span className="font-bold">Services:</span> App development, game development, web development, cybersecurity, and more.</li></Fade>
 <Fade direction="right" delay='.12'><li><span className="font-bold">Goal:</span>Assist clients in achieving success through high-quality technology and employee growth.</li></Fade>

</h3>
<Link to='/about'><button className="uppercase transition  duration-300 ease-in-out hover:scale-110 bg-orange-600 shadow-md shadow-white text-emerald-50 px-4 mt-7 py-2 ml-2 rounded-full">more about us</button></Link>
        </div>
           </div>
           </div>
           <div>
           <div className="hero bg-zinc-700 text-white min-h-screen ">
  <div className="hero-content flex-col lg:flex-row  md:flex-row lg:gap-16 lg:max-w-[1900px] mx-auto">
    <div className="">
    <BoxReveal boxColor={"#FFA600"} duration={0.5}><h1 className="lg:text-5xl text-2xl md:text-3xl font-bold"><span className="text-orange-600"> Services</span> We Can <br /> Help You With!</h1></BoxReveal>
    <BoxReveal boxColor={"#FFA600"} duration={0.5}> <p className="py-5 lg:w-[400px]">At LM GROUP, we are dedicated to delivering modern, effective, and world-class services for your business. <br />  
Our skilled Developer team creates secure and scalable software solutions across various technology platforms, enhancing and optimizing your business operations.  
</p></BoxReveal>
<BoxReveal boxColor={"#FFA600"} duration={0.5}><Link to='/services'><button className="uppercase transition duration-300 ease-in-out hover:scale-110 bg-orange-600 shadow-md shadow-white text-emerald-50 px-4 mt-2 py-2 rounded-full">explore more</button></Link></BoxReveal>
    </div>
    <div  className="grid  lg:grid-cols-3 gap-x-4 gap-y-4 mt-5 ">
     <Link to='/services'><div>
     <BoxReveal boxColor={"#FFA600"} duration={0.7}><div className="card bg-neutral w-64 md:w-72 mx-auto text-neutral-content transition duration-300 ease-in-out hover:scale-110 lg:w-80">
  <div className="card-body items-center text-center">
    <p className="text-7xl text-orange-500"><HiMiniCodeBracket />
    </p>
    <p className="text-2xl text-white">Developer </p>
  </div>
</div></BoxReveal>
     </div></Link>
     <Link to='/services'><div>
     <BoxReveal boxColor={"#FFA600"} duration={0.7}><div className="card bg-neutral w-64 md:w-72 mx-auto  text-neutral-content transition duration-300 ease-in-out hover:scale-110 lg:w-80">
     <div className="card-body items-center text-center">
    <p className="text-7xl text-orange-500"><FaKeyboard /></p>
    <p className="text-2xl text-white">Programmer </p>
  </div>
</div></BoxReveal>
     </div></Link>
     <Link to='/services'><div>
     <BoxReveal boxColor={"#FFA600"} duration={0.7}><div className="card bg-neutral w-64 md:w-72 mx-auto  text-neutral-content transition duration-300 ease-in-out hover:scale-110 lg:w-80">
     <div className="card-body items-center text-center">
    <p className="text-7xl text-orange-500"><MdOutlineEngineering /></p>
    <p className="text-2xl text-white">Engineer
    </p>
  </div>
</div></BoxReveal>
     </div></Link>
  <Link to='/services'><div>
     <BoxReveal boxColor={"#FFA600"} duration={0.7}><div className="card bg-neutral w-64 md:w-72 mx-auto  text-neutral-content transition duration-300 ease-in-out hover:scale-110 lg:w-80">
     <div className="card-body items-center text-center">
    <p className="text-7xl text-orange-500"><MdAdminPanelSettings />
    </p>
    <p className="text-2xl text-white">Administrator </p>
  </div>
</div></BoxReveal>
     </div></Link>
     <Link to='/services'><div>
     <BoxReveal boxColor={"#FFA600"} duration={0.7}><div className="card bg-neutral w-64 md:w-72 mx-auto  text-neutral-content transition duration-300 ease-in-out hover:scale-110 lg:w-80">
     <div className="card-body items-center text-center">
    <p className="text-7xl text-orange-500"><GiPencilBrush />
    </p>
    <p className="text-2xl text-white">Designer/Creative </p>
  </div>
</div></BoxReveal>
     </div></Link>
     <Link to='/services'><div>
     <BoxReveal boxColor={"#FFA600"} duration={0.7}><div className="card bg-neutral w-64 md:w-72 mx-auto  text-neutral-content transition duration-300 ease-in-out hover:scale-110 lg:w-80">
     <div className="card-body items-center text-center">
    <p className="text-7xl text-orange-500"><FaUsersCog />
    </p>
    <p className="text-2xl text-white">Management/Support </p>
  </div>
</div></BoxReveal>
     </div></Link>
     
    </div>
  </div>
</div>

           </div>
          <Footer></Footer>
        </div>
    );
};

export default Home;