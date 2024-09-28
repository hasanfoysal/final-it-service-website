import { Link } from "react-router-dom";
import img from '../../assets/WhatsApp Image 2024-09-15 at 12.05.06_31ee0d99.jpg'
const Footer = () => {
    return (
        <div>
            <footer className="footer bg-black text-white  p-10">
  <aside>
  <img className="w-32 h-16 " src={img} alt="" />
    <p>
      <h1 className="text-2xl font-semibold">LM <span className="text-orange-600">GROUP.</span> </h1>
      <br />
      Providing reliable tech since 2023
    </p>
    <div className='lg:mt-6 mt-3 md:mt-4 flex space-x-4'>
      <a href="https://www.linkedin.com/in/lm-group04/" target="blank"><img className='w-7 h-7' align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="" height="30" width="40" /></a>
      <a href="https://www.facebook.com/profile.php?id=61564501409288" target="blank"><img className='w-7 h-7' align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="https://www.facebook.com/profile.php?id=100009256108068&mibextid=ZbWKwL" height="30" width="40" /></a>
      <a href="https://www.instagram.com/lmgroup4/" target="blank"><img className='w-7 h-7' align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="" height="30" width="40" /></a>
      <a href="https://www.pinterest.com/lmgroup04/" target="blank"><img className='w-7 h-7' align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/pinterest.svg" alt="" height="30" width="40" /></a>
      <a href="https://x.com/lmgroup04" target="blank"><img className='w-7 h-7' align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="" height="30" width="40" /></a>
      </div>
  </aside>
  <nav>
    <h6 className="footer-title">UseFul Links</h6>
    <Link to='/'> <a className="link link-hover">Home</a></Link>
    <Link to='/about'> <a className="link link-hover">About</a></Link>
    <Link to='/services'> <a className="link link-hover">Services</a></Link>
    <Link to='/blog'><a className="link link-hover">Blog</a></Link>
    <Link to='/members'> <a className="link link-hover">Members</a></Link>
  </nav>
  <nav>
    <h6 className="footer-title">Contact Inforfations</h6>
    <a className="link link-hover">phone:+880 1820903619</a>
    <a className="link link-hover">Email:lmgroup442@gmail.com</a>
    <a className="link link-hover">Location:Dhaka,Bangladesh</a>
  
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <Link to='/terms'><a className="link link-hover">Terms & Conditions</a></Link>
    <Link to='/private'><a className="link link-hover">Privacy policy</a></Link>
  </nav>
</footer>
        </div>
    );
};

export default Footer;