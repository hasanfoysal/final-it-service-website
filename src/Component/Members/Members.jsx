import LetterPullup from "../LetterPullUp";
import img from '../../assets/modern-office-composition-with-businessman_23-2147900145.avif'
import banner from '../../assets/istockphoto-1346944001-612x612.jpg'
import Footer from "../Footer/Footer";

const Members = () => {
    return (
        <div>
                <div className="hero" style={{backgroundImage: `url(${banner})`}}>
  <div className="hero-overlay bg-opacity-60 h-[400px] shadow-2xl "><img className='opacity-50 ' /></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
    
      <div> 
      <LetterPullup className='lg:text-7xl text-4xl pb-4 md:text-4xl  text-white font-bold' words={" Members "} delay={0.1} />;
        {/* <p className=" lg:text-7xl text-4xl pb-4 md:text-4xl  text-white font-bold"> Services  </p> */}
        </div>
    
      
    </div>
  </div>
 
</div>
<div className="bg-slate-600 text-black my-8">
           <h1 className="lg:text-4xl text-2xl text-center p-3 bg-stone-400 text-slate-600 font-bold">Meet Our Team Members</h1>
           <div className="flex flex-col lg:flex-row md:flex-row justify-between  sm:mt-8 md:mt-10 lg:mt-12">
            {/* main div */}
            <div>
{/* ceo */}
<div className="card  bg-white  text-black w-64 md:w-80 mx-auto my-3 lg:w-96 lg:ml-5 lg:mt-14 shadow-black shadow-md">
       <figure>
    <img className='w-full rounded-t-full'
      src={img}
      alt="img1" />
  </figure>
  <div className="card-body font-semibold">
 
<h1 className='text-xl text-orange-500'>Managing Director (MD):</h1>
<h3>Mahmud Hasan, Founder and Managing Director of LM GROUP, who leads all activities and decisions of the company. Under his vision and leadership LM GROUP achieved outstanding success.
</h3>
  </div>
</div>

            </div>


{/* membe */}
<div>

    <div className="flex flex-col lg:flex-row md:flex-row justify-between  sm:mt-8 md:mt-10 lg:mt-12 lg:mr-7 gap-4 lg:mb-6">
    <div className="card w-64 md:w-80 mx-auto my-3 bg-white  text-black lg:w-80 shadow-black shadow-md">
       <figure>
    <img className='w-full rounded-t-full'
      src={img}
      alt="img2" />
  </figure>
  <div className="card-body font-semibold">
 
<h1 className='text-xl text-orange-500'>Chief Executive Officer (CEO):</h1>
<h3>Our CEO oversees all aspects of the business and develops strategic plans to achieve company goals and objectives. We have achieved consistent growth under his experience and leadership.
</h3>
  </div>
</div>
<div className="card w-64 md:w-80  bg-white  text-black mx-auto my-3 lg:w-96 shadow-black shadow-md">
       <figure>
    <img className='w-full rounded-t-full'
      src={img}
      alt="img3" />
  </figure>
  <div className="card-body font-semibold">
 
<h1 className='text-xl text-orange-500'>Chief Technology Officer (CTO):</h1>
<h3>The CTO is the head of our technical team, who is responsible for technology management and implementation of new innovative technologies. Under his able leadership we always use modern technology.
</h3>
  </div>
</div>
<div className="card  bg-white  text-black w-64 md:w-80 mx-auto my-3 lg:w-96 shadow-black shadow-md">
       <figure>
    <img className='w-full rounded-t-full'
      src={img}
      alt="img4" />
  </figure>
  <div className="card-body font-semibold">
 
<h1 className='text-xl text-orange-500'>Chief Operating Officer (COO):</h1>
<h3>The COO manages day-to-day operations and coordinates across all our departments, which improves the overall performance of our company.
</h3>
  </div>
</div>
    </div>
    <div className="flex flex-col lg:flex-row md:flex-row justify-between  sm:mt-8 md:mt-10 lg:mt-12 lg:mr-7 gap-4 lg:mb-6 ">
    <div className="card  bg-white  text-black w-64 md:w-80 mx-auto my-3 lg:w-96 shadow-black shadow-md">
       <figure>
    <img className='w-full rounded-t-full'
      src={img}
      alt="img5" />
  </figure>
  <div className="card-body font-semibold">
 
<h1 className='text-xl text-orange-500'>Chief Financial Officer (CFO):</h1>
<h3>The CFO manages our financial strategy and budget. His expertise ensures our financial stability and success.</h3>
  </div>
</div>
<div className="card  bg-white  text-black w-64 md:w-80 mx-auto my-3 lg:w-96 shadow-black shadow-md">
       <figure>
    <img className='w-full rounded-t-full'
      src={img}
      alt="img6" />
  </figure>
  <div className="card-body font-semibold">
 
<h1 className='text-xl text-orange-500'>Chief Marketing Officer (CMO):</h1>
<h3>The CMO oversees our marketing strategy and customer relationships. Under his leadership we have been successful in delivering our services and products to our customers.
</h3>
  </div>
</div>
<div className="card  bg-white  text-black w-64 md:w-80 mx-auto my-3 lg:w-96 shadow-black shadow-md">
       <figure>
    <img className='w-full rounded-t-full h-54'
      src={img}
      alt="img7" />
  </figure>
  <div className="card-body font-semibold">
 
<h1 className='text-xl text-orange-500'>Chief Human Resources Officer (CHRO):</h1>
<h3>The CHRO manages our human resources and takes care of everything from team building to employee development. Our employees are always motivated and efficient under his supervision.
</h3>
  </div>
</div>
    </div>
    <div className="text-center my-8">
    <h1 className='text-xl text-orange-500 font-bold'>Other Employees:</h1>
<h3 className="mx-7 p-3 bg-slate-50 text-black font-semibold rounded-xl">
At LM GROUP we are proud to have a group of talented and skilled professionals in our team who are contributing to our goals every day.
Our Developer, Programmer, Engineer, Administrator, Designer/Creative, and Management/Support team members are the best in their respective fields and they work together to make our
Provides the highest quality service to customers.
Through their commitment and hard work we are able to successfully implement the mission of LM GROUP.
</h3>
    </div>

</div>
        

           </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Members;