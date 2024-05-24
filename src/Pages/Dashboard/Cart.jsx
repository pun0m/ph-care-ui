import React from "react";
import useCart from "../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure(); 
  const handleDelete = id => {
	Swal.fire({
		title: "Are you sure?",
		text: "You won't be able to revert this!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes, delete it!"
	    }).then((result) => {
		if (result.isConfirmed) {
		//   Swal.fire({
		//     title: "Deleted!",
		//     text: "Your file has been deleted.",
		//     icon: "success"
		//   })
		axiosSecure.delete(`/carts/${id}`)
		.then(res =>{
			console.log(res);
		})
		}
	    });
	    

  }

  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-4xl">Items: {cart.length} </h2>
        <h2 className="text-4xl">Total Price: {totalPrice} </h2>
        <button className="btn btn-secondary btn-lg "ame>Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th># </th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
             
              <tr key={item._id}>
                <td>{index + 1}</td>               
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-ghost btn-lg"
                >
                  <FaTrashAlt className="text-red-600"></FaTrashAlt>
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
