// Write your Color component here
import React, { useState } from 'react';
import './App.css'; 
import './index.css'; 

// Color component
const Color = ({ color, setSelectedColor }) => {
  return (
    <div 
      className={color} 
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};

// Picker component
const Picker = () => {
  const [selectedColor, setSelectedColor] = useState(""); // Step 2

  return (
    <div>
      {/* Step 3: Navigation bar showing the currently selected color */}
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        {/* Step 4: Passing setSelectedColor to each Color component */}
        <Color color="yellow" setSelectedColor={setSelectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} />
        <Color color="black" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div className="App">
      <h1>Color Picker</h1>
      <Picker />
    </div>
  );
};

export default App;
