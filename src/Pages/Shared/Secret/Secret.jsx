const Secret = () => {
	return (
		<div style={{padding:'150px 30px 50px 30px',fontSize:'20px'}}>
			<h1 >For New Users! </h1>
			<p>For the first order, s/he will get <b>25%</b> off on his total price. Use coupon: <b>25NEW</b> </p>
			
			<h1 style={{paddingTop:'20px'}}>For Regular Users! </h1>
			<p>For more than three items, s/he will get <b>15%</b> off on his total price. Use coupon: <b>15REG</b> </p>
			
			<h1 style={{paddingTop:'20px'}}>For Seasonal Users! </h1>
			<p>For more than five items, s/he will get <b>10%</b> off on his total price. Use coupon: <b>10SEA</b> </p>

			<p style={{color:'red', paddingTop:'20px'}}>*** Terms & Conditions Applicable</p>

		</div>
	);
};

export default Secret;