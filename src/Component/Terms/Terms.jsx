import img from '../../assets/istockphoto-1410026326-612x612.jpg'
import Footer from '../Footer/Footer';
import LetterPullup from '../LetterPullUp';
const Terms = () => {
    return (
        <div>
               <div className="hero" style={{backgroundImage: `url(${img})`}}>
  <div className="hero-overlay bg-opacity-60 w-full h-[400px] shadow-2xl "><img className='opacity-50 ' /></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
    
      <div> 
      <LetterPullup className='lg:text-7xl text-3xl pb-4 md:text-4xl  text-white font-bold' words={"Terms & Conditions"} delay={0.1} />;
        </div>
    
      
    </div>
  </div>
 
</div>
<div className='bg-white text-black my-6'>
<h1 className='text-3xl text text-center font-semibold my-3'>Below are the <span className='text-4xl font-bold text-orange-600'>Terms and Conditions</span>  of LM GROUP in more detail:</h1>
<div className='my-4 mx-8'>
<h1 className='text-xl my-3 mt-5'>
1. <span className='font-semibold text-orange-600'>Payment:</span>  Payment will be made through bank transfer after completion of group work. No advance payment shall be made before commencement of work.
</h1>
<h1 className='text-xl my-3'>2. <span className='font-semibold text-orange-600'>Work Details:</span> A detailed report should be submitted for each completed work, clearly reflecting the work process and results.</h1>
<h2 className='text-xl my-3'>3.<span className='font-semibold text-orange-600'>Free Service:</span> Any additional work or correction required by the group shall be provided free of charge. No additional charges will be accepted.</h2>
<h3 className='text-xl my-3'>4.<span className='font-semibold text-orange-600'>Joining and Working:</span> After joining the new members, they have to work as juniors for at least 6-12 months. However, if the members are found to be qualified, they may be promoted directly to senior posts.</h3>
<h4 className='text-xl my-3'>5.<span className='font-semibold text-orange-600'> Behaviour:</span> Maintaining respectful behavior towards seniors is mandatory. Disrespectful or bad behavior of any kind is not acceptable.</h4>
<h5 className='text-xl my-3'>6.<span className='font-semibold text-orange-600'> Liability:</span> If any illegal activity is carried out using the group's name, the full responsibility will fall on the respective member. The group will not accept any liability.</h5>
<h6 className='text-xl my-3'>7.<span className='font-semibold text-orange-600'> Event Participation:</span> It is mandatory to participate in events organized by the group every year. It will be considered as an important activity for the members.</h6>
<h1 className='text-xl my-3'>8.<span className='font-semibold text-orange-600'> Project Completion:</span> Any amount of project cost received from buyers, must be completed. Failure to complete the task will result in the member being kicked out of the group.</h1>
<h2 className='text-xl my-3'>9.<span className='font-semibold text-orange-600'>Training and Development:</span> Regular training and skill development programs will be conducted for the members. Participation in this program is mandatory for all members.</h2>
<h3 className='text-xl my-3'>10.<span className='font-semibold text-orange-600'>Confidentiality:</span> Group internal information and client information will be kept strictly confidential. Any member disclosing this information will be subject to disciplinary action.</h3>
<h6 className='text-xl my-3'>11.<span className='font-semibold text-orange-600'>Violation of Agreement:</span> If any member violates these terms and conditions, necessary action will be taken against them and they will not be allowed to rejoin the group in future.</h6>
<h2 className='text-xl my-3'>12.<span className='font-semibold text-orange-600'> Feedback and suggestions:</span> Feedback and suggestions from members will be accepted to improve the activities and performance of the group. Members' views are valued and considered as part of development.</h2>
<h2 className='text-xl my-3'>13.<span className='font-semibold text-orange-600'> Safety and Security:</span> A safe and secure working environment will be ensured for all members of the group. Any safety issues or concerns should be reported to the appropriate authorities immediately.</h2>
<h4 className='text-xl my-3'>14.<span className='font-semibold text-orange-600'> Updates and Changes:</span> These Terms may be changed at any time. Members will be notified of changes and the new terms will be effective.</h4>
</div>
</div>
<Footer></Footer>
<div>
    
</div>
        </div>
    );
};

export default Terms;