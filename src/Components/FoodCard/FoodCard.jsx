import Swal from "sweetalert2";
import {useLocation, useNavigate} from "react-router-dom"
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({item}) => {
	const{name,image,price,recipe,_id}=item;
	const {user} = useAuth();
	const navigate = useNavigate();
	const location = useLocation;
	const axiosSecure = useAxiosSecure(); 
	const [,refetch] = useCart();

	const handleAddToCart = () => {
		if(user && user.email){
			const cartItem ={
				menuId: _id,
				email: user.email,
				name,
				price
			}
			axiosSecure.post('/carts',cartItem)
			.then(res=> {
				console.log(res.data)
				if(data.insertedId){
				   Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: `${name} added to your cart`,
					showConfirmButton: false,
					timer: 1500
				});
				refetch();
			}
			})
			// fetch('http://localhost:5000/carts')
			// .then(res =>res.json())
			// .then(data => {
			// 	if(data.insertedId){
			// 		Swal.fire({
			// 			position: 'top-end',
			// 			icon: 'success',
			// 			title: "Great!",
			// 			showConfirmButton: false,
			// 			timer: 1500
			// 		})
			// 	}
			// })
		}
		else{
			Swal.fire({
				title: "Please Login to Order the food.",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Login Now"
			    }).then((result) => {
				if (result.isConfirmed) {
			
				    navigate('/login',{state: {from: location}})
				
				}
			    });  
		}
	}
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure><img src={image} alt="Shoes" /></figure>
			<p className="text-white bg-slate-900 mr-4 absolute right-0 mt-3 px-4">${price}</p>
			<div className="card-body flex flex-col items-center text-center">
				<h2 className="card-title">{name}</h2>
				<p>{recipe}</p>
				<div className="card-actions justify-end">
					<button 
					onClick={handleAddToCart}
					className="btn btn-outline bg-slate-200 border-0 border-b-4 mt-4">Add to Cart</button>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;