import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const {user,logOut}= useContext(AuthContext)
  const [cart] =useCart();
  
  const handleLogOut = () => {
    logOut()
    .then(()=>  { })
    .catch(error => console.log(error));
  }

  const navOptions = <>
      <li> <Link to='/showserial'>Show Serial</Link> </li>
      <li> <Link to='/help'>Need Help!</Link> </li>
      <li> <Link to='/'>Home</Link> </li>
      <li> <Link to='/menu'>Pet Food</Link> </li>
      <li><Link to='/bmichecker'>BMI</Link></li>
      <li> <Link to='/order/salad'>Order Food</Link> </li>
      <li> <Link to='/secret'>Secret</Link> </li> 
      <li><Link to='/namematch'>Match</Link></li>
     <li>
       <Link to='/dashboard/cart'>
              
          <FaShoppingCart className="mr-2"></FaShoppingCart>
        <div className="badge badge-error">+0{cart.length}</div>
    
        </Link>
     </li>

   
      {
        user ? <> 
         
          <button onClick={handleLogOut}>LogOut</button>
        </> : <>
         <li> <Link to='/login'>Login</Link> </li>
        </>
      }
      
  </>

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-info bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
          </div>
          <a className="btn btn-ghost text-xl">PH CARE</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
          
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
