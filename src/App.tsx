import React from "react";
import { Car } from "./Car";

function App() {
  // Create an instance of the Car class
  const myCar = new Car("Toyota", "Corolla", 2022);

  return (
    <div className="App">
      <h1>React + TypeScript Example</h1>
      <button onClick={() => myCar.start()}>Start Car</button>
    </div>
  );
}

export default App;
