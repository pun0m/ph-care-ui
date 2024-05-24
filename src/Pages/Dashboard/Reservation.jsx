import React, { useRef } from 'react';

const Reservation = () => {

	const nameRef =useRef();
	const ageRef =useRef();
	const syntomRef =useRef();

	const handleSubmit = () =>{
		let name = nameRef?.current.value;
		let age = ageRef?.current.value;
		let syntom = syntomRef?.current.value;

		if(name!=="" && age !== "" && syntom !== ""){
	
			fetch('http://localhost:5000/reservation', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ name,age,syntom })
            })
                .then(res => res.json())
                .then(result => {
                })
			nameRef.current.value="";
			ageRef.current.value="";
			syntomRef.current.value="";
		}
		else {
			alert("Please complete all the fields carefully!");
		  }
	}

	return (
		<div style={{padding:'120px'}}>
		<h1 style={{ textAlign: "center" }} className="text-4xl">
		  Input Your Serial
		</h1>
		<input 
		ref={nameRef}
		style={{ margin: "10px 0px" }}
		  type="text"
		  placeholder="Patient Name"
		  className="input input-bordered input-lg w-full"
		/>
		<br />
		<input
		ref={ageRef}
		style={{ margin: "10px 0px" }}
		  type="number"
		  placeholder="Age"
		  className="input input-bordered input-lg w-full "
		/>
		<br />
		<textarea
		ref={syntomRef}
		style={{ margin: "10px 0px" }}
		  type="text"
		  placeholder="Write Your Symptoms Here..."
		  className="input input-bordered input-lg w-full "
		/>
		<div style={{textAlign:'center'}}>
		<button className="btn btn-neutral" 
		onClick={e => {
			e.preventDefault();
			handleSubmit();
		  }}
		  >Submit</button>
		</div>
	    </div>
	);
};

export default Reservation;