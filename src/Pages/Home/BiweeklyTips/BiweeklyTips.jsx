import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const BiweeklyTips = () => {
  const [tip, setTip] = useState('');

  useEffect(() => {
    const fetchTip = async () => {
      try {
        const response = await axios.get('http://localhost:3001/tip');
        setTip(response.data.tip);
      } catch (error) {
        console.error('Error fetching tip:', error);
      }
    };

    fetchTip();
  }, []);

  return (
    <div>
      <SectionTitle subHeading="Tip of the Week!" heading="Tips that may come in handy" />
      <div className="md:flex justify-center items-center py-10 px-16">
        <div className="md:ml-10">
          <p className="uppercase pb-2">
            <b>{tip}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BiweeklyTips;