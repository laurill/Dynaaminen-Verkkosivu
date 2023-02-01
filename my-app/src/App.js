import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";

const App = () => {
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState("male");
  const [beer, setBeer] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);

  const calculateBloodAlcoholLevel = () => {
    const litres = beer * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);
    let result;
    if (gender === "male") {
      result = gramsLeft / (weight * 0.7);
    } else {
      result = gramsLeft / (weight * 0.6);
    }
    result = result < 0 ? 0 : result;
    setResult(result.toFixed(2));
  };

  return (
    <div class="container">
      <h1>Blood Alcohol Level Calculator</h1>
      <div>
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          />
      </div>
      <div>
      <label>
          <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={e => setGender(e.target.value)} />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={e => setGender(e.target.value)} />
          Female
        </label>
      </div>
      <div>
        <label>Number of Beer Bottles:</label>
        <input
          type="number"
          value={beer}
          onChange={(e) => setBeer(e.target.value)}
        />
      </div>
      <div>
        <label>Time (hours):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button onClick={calculateBloodAlcoholLevel}>Calculate</button>
      <div>
        <h2>Result:</h2>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default App;