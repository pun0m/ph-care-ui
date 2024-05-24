import React, { useState, useEffect } from 'react';

function App() {
  const [healthTips, setHealthTips] = useState([]);

  useEffect(() => {
    // Fetch health tips data from the JSON file
    fetch('/healthTipsData.json')
      .then(response => response.json())
      .then(data => setHealthTips(data.healthTips))
      .catch(error => console.error('Error fetching health tips:', error));
  }, []);

  return (
    <div>
      <h1>Health Tips</h1>
      <ul>
        {healthTips.map(tip => (
          <li key={tip.id}>
            <h2>{tip.title}</h2>
            <p>{tip.description}</p>
            <p><strong>Category:</strong> {tip.category}</p>
            <p><strong>Author:</strong> {tip.author}</p>
            <p><strong>Date:</strong> {tip.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
