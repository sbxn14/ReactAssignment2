import React from 'react';
import './App.css';

// Bootstrap 5 import (via NPM)
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const values = () => {
    let result = 0;
    const inputs = [
      '42',
      '1e3',
      '1.222',
      null,
      undefined,
      '-12'
    ];

    result = inputs
      // Filter out null and undefined values
      .filter(value => value !== null && value !== undefined)
      // Convert string numbers to floats
      .map(value => {
        const num = parseFloat(value);
        // extra check for the 1.222
        return value.includes('.') ? num * 1000 : num;
      })
      // Sum it all up
      .reduce((a, b) => a + b, 0);

    // result should be 2252
    return result;
  }

  return (
    <div className="App">
      <h1>The values in the Array equal to {values()}</h1>
    </div>
  );
}

export default App;
