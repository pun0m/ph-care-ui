import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/Images/featuredpng.png';
import { Link} from 'react-router-dom';


const Featured = () => {
	return (
		<div>
			<SectionTitle subHeading="Check it Out" heading= "Featured Item - CATS">

			</SectionTitle>
			<div className='md:flex justify-center items-center py-10 px-16'>
				<div>
					<img src={featuredImg} alt="" />
				</div>
				<div className='md:ml-10'>
					<p>Aug20, 2029 </p>
					<p className='uppercase pb-2'>What Cat Love Most</p>
					<p>The delicious relationship between cats and fish goes deep. Not only are cats completely in love with fish but they are extremely fascinated by the strong smell as well! And fish is good for felines because of two primary reasons. Fish is not just packed with essential minerals, but the rich flavour and texture of fish make it a popularly sought-after food for cats. So, in spite of not sharing the best bond with water, cats love the taste of fish. Fish is also rich in amino acids like Taurine, which plays a vital role in improving the cat’s vision, heart, and muscle function, and boosts their immune system. The taste of fish is strongly registered in a cat’s sensory receptors. Fish, as cats' favourite food also helps in stirring up the cat’s diet by offering a variety that your feline friend will love! Presently, almost 15% of an average cat’s diet comprises fish. </p>
					<button className='btn btn-outline border-0 border-b-4'> 
					<Link to='/order'>See Menu</Link>
					</button>
					
				</div>
			</div>
		</div>
	);
};

export default Featured;