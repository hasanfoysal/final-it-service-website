import LetterPullup from "../LetterPullUp";
import img from '../../assets/information-word-represents-wordcloud-support-and-answer.jpg'
import BoxReveal from "../../BoxReveal/BoxReveal";


const FormFillUp = () => {
    return (
        <div>
            <div className="hero" style={{backgroundImage: `url(${img})`}}>
  <div className="hero-overlay bg-opacity-60 w-full h-[400px] shadow-2xl "><img className='opacity-50 ' /></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
    
      <div> 
      <LetterPullup className='lg:text-7xl text-3xl pb-4 md:text-4xl  text-white font-bold' words={"Informations"} delay={0.1} />;
        </div>
    
      
    </div>
  </div>
 
</div>

<div  className="card bg-zinc-700 text-white w-64 md:w-80 mx-auto my-20 lg:w-[500px] border border-orange-600  shadow-orange-600 shadow-sm">
  <div className="card-body bg-black text-white">
  <form >
  <BoxReveal boxColor={"#FFA600"} duration={0.7}>Name<label className="input input-bordered flex items-center w-48 bg-white lg:w-96 text-black gap-2">
  <input type="text"  className="grow" placeholder=" enter your name" />
</label></BoxReveal>
<BoxReveal boxColor={"#FFA600"} duration={0.7}>Email Address<label className="input input-bordered flex w-48 lg:w-96 items-center mt-2 bg-white text-black gap-2">

  <input type="email"  className="grow" placeholder=" enter your email" />
</label></BoxReveal>
<BoxReveal boxColor={"#FFA600"} duration={0.7}>Company Name(if any)<label className="input input-bordered flex items-center w-48 bg-white lg:w-96 text-black gap-2">
  <input type="text"  className="grow" placeholder=" enter your company name" />
</label></BoxReveal>
<BoxReveal boxColor={"#FFA600"} duration={0.7}>Project Description<label className="input input-bordered flex w-48 lg:w-96 items-center pt-6 py-24 bg-white text-black mt-2 gap-2">
  <input  type="text"  className="grow " placeholder=" enter your project description" />
</label></BoxReveal>

<BoxReveal boxColor={"#FFA600"} duration={0.7}>Project Budget<label className="input input-bordered flex items-center w-48 bg-white lg:w-96 text-black gap-2">
  <input type="text"  className="grow" placeholder=" enter your project budget" />
</label></BoxReveal>
<BoxReveal boxColor={"#FFA600"} duration={0.7}>Project Deadline<label className="input input-bordered flex items-center w-48 bg-white lg:w-96 text-black gap-2">
  <input type="text"  className="grow" placeholder=" enter your project deadline" />
</label></BoxReveal>
<BoxReveal boxColor={"#FFA600"} duration={0.7}>Required Features<label className="input input-bordered flex items-center w-48 bg-white lg:w-96 text-black gap-2">
  <input type="text"  className="grow" placeholder=" enter your required features" />
</label></BoxReveal>
<BoxReveal boxColor={"#FFA600"} duration={0.7}>Company Website(if any)<label className="input input-bordered flex items-center w-48 bg-white lg:w-96 text-black gap-2">
  <input type="text"  className="grow" placeholder=" enter your company website" />
</label></BoxReveal>
<BoxReveal boxColor={"#FFA600"} duration={0.7}>Any Other Specific<label className="input input-bordered flex items-center w-48 bg-white lg:w-96 text-black gap-2">
  <input type="text" className="grow" placeholder=" enter your any other specific" />
</label></BoxReveal>
<BoxReveal boxColor={"#FFA600"} duration={0.7}>Requirements<label className="input input-bordered flex items-center w-48 bg-white lg:w-96 text-black gap-2">
  <input type="text" className="grow" placeholder=" enter your requirements" />
</label></BoxReveal>

<BoxReveal boxColor={"#FFA600"} duration={0.7}><input className="btn btn-outline mt-4 border-orange-600 text-white shadow-md  shadow-orange-600  hover:bg-orange-600 hover:text-white" type="submit" value="Send" /></BoxReveal>
   </form>
    
  </div>
</div>
</div>
       
    );
};

export default FormFillUp;