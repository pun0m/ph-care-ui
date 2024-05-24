import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({item}) => {
	const{name,image,price,recipe}=item;
	return (
		<div className='flex space-x-2'>
			<img style={{borderRadius:'0 200px 200px 200px' }} className='w-[100px]' src={image} alt=""/>
			<div>
				<h3 className='uppercase'>{name}-----------------</h3>
				<p>{recipe}</p>
			</div>
			<p className='text-yellow-500'>${price}</p>
			<button className='btn btn-outline border-0 border-b-4'> 
					<Link to='/order'>Check Now</Link>
					</button>
		</div>
		
	);
};

export default MenuItem; 