import React, { useState } from 'react';
import axios from 'axios';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const CalculateBMI = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const calculateBMI = async () => {
    const options = {
      method: 'GET',
      url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric',
      params: { height, weight },
      headers: {
        'X-RapidAPI-Key': 'f226b483f2msh422625710a4d6cep1443a7jsn19960a72cef5',
        'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setBmiResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <SectionTitle subHeading="BMI" heading="Let's check your BMI" />
      <div className="md:flex justify-center items-center py-10 px-16">
        <div className="md:ml-10">
          <p className="uppercase pb-2">
            <b>Height (in meters):</b>
          </p>
          <input
            type="text"
            value={height}
            onChange={handleHeightChange}
            className="border border-gray-400 p-2 rounded"
          />
        </div>
        <div className="md:ml-10">
          <p className="uppercase pb-2">
            <b>Weight (in kilograms):</b>
          </p>
          <input
            type="text"
            value={weight}
            onChange={handleWeightChange}
            className="border border-gray-400 p-2 rounded"
          />
        </div>
        <div className="md:ml-10">
          <button
            onClick={calculateBMI}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Calculate BMI
          </button>
        </div>
      </div>
      {bmiResult && (
        <div className="md:flex justify-center items-center py-10 px-16">
          <div className="md:ml-10">
            <p>
              <b>BMI:</b> {bmiResult.bmi}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculateBMI;