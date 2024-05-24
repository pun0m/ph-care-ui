import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar></Navbar>
      <div style={{ padding: "150px", textAlign:"center" }}>
        
          <h1>404</h1> 
	   <h4>
	   Page Not Found The resourse requested could not be found on this
          server
	   </h4>
	   <button className="btn btn-neutral">
     <a href="/">Go to Home</a>
	   </button>
      
      </div>
      <Footer></Footer>
    </>
  );
};

export default NotFound;
