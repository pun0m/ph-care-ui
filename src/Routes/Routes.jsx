import {
	createBrowserRouter,
    } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import NotFound from "../Pages/Shared/NotFound/NotFound";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Help from "../Pages/Shared/Help/Help";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import Reviews from "../Pages/Dashboard/Reviews";
import Reservation from "../Pages/Dashboard/Reservation";
import ShowSerial from "../Components/ShowSerial/ShowSerial";
import NameMatch from "../Components/NameMatch/NameMatch";
import BMIchecker from "../Pages/BMIchecker/BMIchecker";


export const router = createBrowserRouter([
	{
	  path: "/",
	  element: <Main></Main>,
	  children: [
		{
			path: "/",
			element: <Home></Home>
            
		},
		{
			path:"menu",
			element: <Menu></Menu>
		},
		{
			path:"help",
			element:<Help></Help>
		},
		{
			path:"order/:category",
			element:<Order></Order>
		},
		{
			path:"order",
			element:<Order></Order>
		},

		{
			path: 'login',
			element: <Login></Login>
		},
		{
			path: 'signup',
			element: <SignUp></SignUp>
		},
		{
			path:'secret',
			element: <PrivateRoute> <Secret></Secret> </PrivateRoute>
		},
		{
			path: "/*",
			element: <NotFound></NotFound>
		},
		{
			path:'showserial',
			element: <ShowSerial></ShowSerial>
		},
		{
			path:'namematch',
			element: <NameMatch></NameMatch>
		},	
		{
			path:'bmichecker',
			element:<BMIchecker></BMIchecker>
		}	
	]
	},
	{
		path:'dashboard',
		element: <Dashboard></Dashboard>,
		children: [
			{
				path:'cart',
				element: <Cart></Cart>
			},
			{
				path:'reviews',
				element: <Reviews></Reviews>
			},
			{
				path:'reservation',
				element: <Reservation></Reservation>
			},

		]
	},
	
    ]);
