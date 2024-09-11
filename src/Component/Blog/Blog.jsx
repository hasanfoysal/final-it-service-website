import LetterPullup from "../LetterPullUp";
import img from '../../assets/istockphoto-1346944001-612x612.jpg'
import blog1 from '../../assets/cuttingedge-ai-technology-businessman-had-260nw-1456589462.webp'
import blog2 from '../../assets/Milestone-Success.jpg'
import blog3 from '../../assets/istockphoto-1346944001-612x612.jpg'
import blog4 from '../../assets/79997713-close-up-of-handshake-on-city-background-with-forex-chart-deal-concept-double-exposure.jpg'
import blog5 from '../../assets/upcoming-events-speech-bubble-banner-with-upcoming-events-text-glassmorphism-style-business-marketing-advertising-vector-isolated-background-eps-10_399089-2079 (1).avif'
import blog6 from '../../assets/CSR.jpg'
import member from '../../assets/modern-office-composition-with-businessman_23-2147900145.avif'
import { Fade } from "react-awesome-reveal";

const Blog = () => {
    return (
        <div>
             <div className="hero" style={{backgroundImage: `url(${img})`}}>
  <div className="hero-overlay bg-opacity-60 h-[400px] shadow-2xl "><img className='opacity-50 ' /></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
    
      <div> 
      <LetterPullup className='lg:text-7xl text-4xl pb-4 md:text-4xl  text-white font-bold' words={" Blog "} delay={0.1} />;
        {/* <p className=" lg:text-7xl text-4xl pb-4 md:text-4xl  text-white font-bold"> Services  </p> */}
        </div>
    
      
    </div>
  </div>
 
</div>
<div className="lg:flex flex-row lg:gap-36 lg:max-w-[1200px] bg-white text-black mx-auto my-16 justify-center">
<Fade direction="left"><div>
<div className="lg:flex flex-row gap-7">
<div className="card card-compact bg-base-100  text-black w-64 md:w-80 transition duration-300 ease-in-out hover:scale-110 mx-auto my-3 shadow-xl">
  <figure>
    <img
      src={blog1}
      alt="blog3" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> Launch of a New Project:</h2>
    <p>We are delighted to announce that LM GROUP has recently launched a new project that will deliver cutting-edge technological solutions for our clients. This initiative is set to enhance the efficiency and integration of our clients' business operations.
    </p>
  </div>
</div>
<div className="card card-compact bg-base-100  text-black w-64 md:w-80 transition duration-300 ease-in-out hover:scale-110 mx-auto my-3 shadow-xl">
  <figure>
    <img
      src={blog2}
      alt="blog3" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> Milestone of Success:</h2>
    <p>Recently, LM GROUP celebrated the success of our previous projects. Our team takes great pride in the services and solutions we have provided, which have significantly contributed to client satisfaction. Notably, we have achieved remarkable success in our cybersecurity services and software development.

    </p>
  </div>
</div>
</div>
<div className="lg:flex flex-row gap-7">
<div className="card card-compact bg-base-100  text-black w-64 md:w-80 transition duration-300 ease-in-out hover:scale-110 mx-auto my-3 shadow-xl">
  <figure>
    <img
      src={blog3}
      alt="blog3" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New Team Members:</h2>
    <p>We welcome our new team members, who will contribute to further improving our skills and service quality. Among them are programmers, designers, and project managers who will bring fresh perspectives and expertise to our projects.
    </p>
  </div>
</div>
<div className="card card-compact bg-base-100  text-black w-64 md:w-80 transition duration-300 ease-in-out hover:scale-110 mx-auto my-3 shadow-xl">
  <figure>
    <img
      src={blog4}
      alt="blog3" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> Partnerships and Collaborations:</h2>
    <p>LM GROUP has recently signed a new partnership agreement that will enhance our technical capabilities and expand our market reach. Through this collaboration, we will be able to offer a broader and more advanced range of services.

    </p>
  </div>
</div>
</div>
<div className="lg:flex flex-row gap-7">
<div className="card card-compact bg-base-100  text-black w-64 md:w-80 transition duration-300 ease-in-out hover:scale-110 mx-auto my-3 shadow-xl">
  <figure>
    <img
      src={blog5}
      alt="blog3" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> Upcoming Events:</h2>
    <p>Next month, we will participate in a major technology conference. During this event, our team will present our latest services and technological innovations and have the opportunity to network with other industry leaders.

    </p>
  </div>
</div>
<div className="card card-compact bg-base-100  text-black w-64 md:w-80 transition duration-300 ease-in-out hover:scale-110 mx-auto my-3 shadow-xl">
  <figure>
    <img
      src={blog6}
      alt="blog3" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Social Initiatives:</h2>
    <p>We have recently launched a social initiative to support the development of our local community. Our team is volunteering in various social activities, and we hope these efforts will make a positive impact on society.

    </p>
  </div>
</div>
</div>
</div></Fade>
<Fade direction="right"><div>
<button className="uppercase transition  duration-300 ease-in-out hover:scale-110 bg-orange-600 shadow-lg  shadow-black text-emerald-50 px-4 mt-7 py-2 ml-2 rounded-full mx-auto text-center">Employee Spotlight</button>
<img className="w-[150px] h-[150px] my-4 rounded-full" src={member} alt="" />
<h1 className="text-left font-semibold">Name: <span className="text-slate-500"> Foysal Hasan</span></h1>
<h1 className="text-left font-semibold">Position:<span className="text-slate-500">COO</span></h1>
<h1 className="text-left font-semibold">Date of Joining:<span className="text-slate-500">1 September,2024</span></h1>
<h1 className="text-left font-semibold">Team:<span className="text-slate-500">Developer</span></h1>
<p className="text-left text-slate-700 my-4">In today's spotlight, we introduce Foysal Hasan, who serves as a Front-End developer at LM GROUP. Foysal Hasan is a key member of our Developer Department, and their skills and experience have been instrumental in the successful implementation of our projects.</p>
<button className="uppercase transition  duration-300 ease-in-out hover:scale-110 mb-5 bg-orange-600 shadow-lg  shadow-black text-emerald-50 px-4 mt-7 py-2 ml-2 rounded-full mx-auto text-center">more about</button>
<div>
<h1 className="font-bold text-xl text-left pt-3">Daily Responsibilities</h1>
<h2 className="font-light text-lg text-left">He manages Specific Responsibilities/Projects in their daily work. Their role includes Specific Duties, which are crucial and effective for our team's success.
</h2>
</div>
<div>
<h1 className="font-bold text-xl text-left">Personal Interests:</h1>
<h2 className="font-light text-lg text-left">Foysal is not only skilled in their professional field but also passionate about Specific Interest/Hobby in their personal life. Their Various Hobbies/Interests make them a well-rounded and inspiring individual.
</h2>
</div>
<div>
<h1 className="font-bold text-xl text-left">Quote:</h1>
<h2 className="font-light text-lg text-left">"He is an invaluable member of our team. Their dedication and professionalism have made a significant contribution to our projects", says Manager.
</h2>
</div>
<div>
<h1 className="font-bold text-xl text-left">Conclusion:</h1>
<h2 className="font-light text-lg text-left">We are proud to work with foysal and wish them continued success in the future. Their contributions at LM GROUP continue to strengthen and drive our operations toward greater success.
</h2>
</div>

</div></Fade>
</div>
        </div>
    );
};

export default Blog;