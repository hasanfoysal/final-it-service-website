import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import { MdAdminPanelSettings, MdOutlineEngineering } from "react-icons/md";
import { FaKeyboard, FaUsersCog } from "react-icons/fa";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { GiPencilBrush } from "react-icons/gi";
import BoxReveal from '../../BoxReveal/BoxReveal'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           {/* service */}
           <div>
           <div className="hero bg-zinc-700 text-white min-h-screen ">
  <div className="hero-content flex-col lg:flex-row  lg:gap-16 lg:max-w-[1900px] mx-auto">
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
           {/* service */}
        </div>
    );
};

export default Home;