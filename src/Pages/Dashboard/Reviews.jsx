import React, { useRef } from "react";

const Reviews = () => {
	const nameRef =useRef();
	const ratingRef =useRef();
	const reviewRef =useRef();

	const handleSubmit = () =>{
		let name = nameRef?.current.value;
		let rating = ratingRef?.current.value;
		let details = reviewRef?.current.value;

		if(name!=="" && rating !== "" && details !== ""){

			fetch('http://localhost:5000/reviews', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ name,rating,details })
            })
                .then(res => res.json())
                .then(result => {
                })
			nameRef.current.value="";
			ratingRef.current.value="";
			reviewRef.current.value="";
		}
		else {
			alert("Please complete all the fields carefully!");
		  }
	}

  return (

    <div>
      <h1 style={{ textAlign: "center" }} className="text-4xl">
        Add a Review
      </h1>
      <input 
	ref={nameRef}
	style={{ margin: "10px 0px" }}
        type="text"
        placeholder="Your Name"
        className="input input-bordered input-lg w-full"
      />
      <br />
      <input
	ref={ratingRef}
	style={{ margin: "10px 0px" }}
        type="number"
        placeholder="Ratings: 0-5"
        className="input input-bordered input-lg w-full "
      />
	<br />
	<textarea
	ref={reviewRef}
	style={{ margin: "10px 0px" }}
        type="text"
        placeholder="Write Something..."
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

export default Reviews;
