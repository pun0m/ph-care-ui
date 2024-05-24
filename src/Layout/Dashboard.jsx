import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import Cart from "../Pages/Dashboard/Cart";


const Dashboard = () => {
	return (
		<div className="flex">
			<div className="w-64 min-h-screen bg-orange-400">
				<ul className="menu">
					<li>
						<FaShoppingCart></FaShoppingCart>
						<NavLink to="/dashboard/cart">
						<FaShoppingCart></FaShoppingCart>
							My Cart ({Cart.length}) </NavLink>
					</li>
					<li>
						<FaShoppingCart></FaShoppingCart>
						<NavLink to="/dashboard/userHome">
						<FaHome></FaHome>

							UserHome</NavLink>
					</li>
					<li>
						<FaShoppingCart></FaShoppingCart>
						<NavLink to="/dashboard/reservation">
						<FaCalendar></FaCalendar>

						Reservation	</NavLink>
					</li>
					<li>
						<FaShoppingCart></FaShoppingCart>
						<NavLink to="/dashboard/reviews">
						<FaAd></FaAd>

							Add a Review</NavLink>
					</li>
					<li>
						<FaShoppingCart></FaShoppingCart>
						<NavLink to="/dashboard/bookings">
						<FaList></FaList>

							My Bookings</NavLink>
					</li>
					<div className="divider"></div>

					<li>
						<FaShoppingCart></FaShoppingCart>
						<NavLink to="/">
							<FaHome></FaHome>

							Home</NavLink>
					</li>
					<li>
						<FaShoppingCart></FaShoppingCart>
						<NavLink to="/order/salad">
							<FaSearch></FaSearch>

							Menu</NavLink>
					</li>
					<li>
						<FaShoppingCart></FaShoppingCart>
						<NavLink to="/dashboard/cart">
							<FaHome></FaHome>

							Cart</NavLink>
					</li>






				</ul>
			</div>
			<div className="flex-1 p-8">
				<Outlet>
					
				</Outlet>

			</div>
		</div>
	);
};

export default Dashboard;