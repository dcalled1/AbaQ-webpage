import React from 'react';
import FunctionIn from './Components/FunctionIn';
import FloatIn from './Components/FloatIn';
import UnsignedIntegerIn from './Components/UnsignedIntegerIn';
import FunctionOut from './Components/FunctionOut';
import MatrixIn from './Components/MatrixIn';

function App() {
  return (
    <div>
      <form>
      <FunctionIn id="id" name="name" tag="tag"/>
      <FloatIn id="id" name="name" tag="`x_1`"/>
      <UnsignedIntegerIn id="id" name="name" tag="tag"/>
      <FunctionOut tag="f(x)" fn="x^2+sqrt(e^(2+25x))"/>
      <MatrixIn n="5"/>
      </form>
    </div>
  );
}

export default App;
