import { FaUser, FaUsers, FaWpforms } from "react-icons/fa";

const Dashboard2 = () => {
    return (
        <div>
                <div className="stats stats-vertical lg:stats-horizontal shadow lg:ml-32 mt-6 ">
  <div className="stat">
  <div><FaUsers></FaUsers>

    <div className="stat-title"> Total Admins </div></div>
  </div>

  <div className="stat">
  <div><FaUser></FaUser></div>
    <div className="stat-title">Total Candidate</div>
   
  </div>

  <div className="stat">
  <div><FaWpforms></FaWpforms></div>
    <div className="stat-title">Total Forms </div>
    
  </div>
</div>
        </div>
    );
};

export default Dashboard2;