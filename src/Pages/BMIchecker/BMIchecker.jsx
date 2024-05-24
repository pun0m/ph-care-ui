import React, { useState } from 'react';

function BMIchecker() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [healthCondition, setHealthCondition] = useState('');

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height from centimeters to meters
      const bmi = weight / (heightInMeters * heightInMeters);
      const roundedBMI = bmi.toFixed(2);
      setBmi(roundedBMI);
      setHealthCondition(interpretBMI(roundedBMI));
    } else {
      alert("Please enter both weight and height");
    }
  };

  const interpretBMI = (bmi) => {
    bmi = parseFloat(bmi);
    if (bmi < 15) {
      return "Underweight: Your pet is too thin and might need more nutrition.";
    } else if (bmi >= 15 && bmi <= 24) {
      return "Normal: Your pet is at a healthy weight.";
    } else if (bmi > 24 && bmi <= 29) {
      return "Overweight: Keep an eye on your pet’s diet and consider exercise.";
    } else if (bmi > 29) {
      return "Obese: Your pet may have health risks and should see a vet.";
    }
  };

  return (
    <div style={{ padding: "120px", textAlign: "center" }} >
      <h1>Pet BMI Calculator</h1>
      <div>
        <label>
          Weight in kg:
          <input style={{ padding: "20px" }}
            type="number"
            value={weight}
            onChange={handleWeightChange}
            placeholder="Enter weight in kg"
          />
        </label>
      </div>
      <div style={{ marginTop: "10px"}} >
        <label >
          Height in cm:
          <input style={{ padding: "20px" }}
            type="number"
            value={height}
            onChange={handleHeightChange}
            placeholder="Enter height in cm"
          />
        </label>
      </div>
      <button
        onClick={calculateBMI}
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px",color:"red"}}
      >
        Calculate BMI
      </button>
      {bmi && (
        <div style={{ marginTop: "20px" }}>
          <h2>Your Pet's BMI is: {bmi}</h2>
          <p>{healthCondition}</p>
        </div>
      )}
    </div>
  );
}

export default BMIchecker;
