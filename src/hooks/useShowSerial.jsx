import { useEffect, useState } from "react";


const useShowSerial = () => {
	const[showSerial,setShowSerial]= useState([]);
	const [loading,setLoading]=useState(true);
	useEffect( ()=>{
		fetch('http://localhost:5000/reservation')
		.then(res=>res.json())
		.then(data => {
			setShowSerial(data);
			setLoading(false);
		});
	},[]);
	return [showSerial,loading]
} 
export default useShowSerial;