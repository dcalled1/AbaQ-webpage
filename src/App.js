import React from 'react';
import FunctionIn from './Components/FunctionIn';
import FloatIn from './Components/FloatIn';
import UnsignedIntegerIn from './Components/UnsignedIntegerIn';
import FunctionOut from './Components/FunctionOut';
import MatrixIn from './Components/MatrixIn';
import MatrixOut from './Components/MatrixOut';
import PointsIn from './Components/PointsIn';
import VectorIn from './Components/VectorIn';
import VectorOut from './Components/VectorOut';

function App() {
  return (
    <div>
      <form>
      <FunctionIn id="id" name="name" tag="tag"/>
      <FloatIn id="id" name="name" tag="`x_1`"/>
      <UnsignedIntegerIn id="id" name="name" tag="tag"/>
      <FunctionOut tag="f(x)" fn="x^2+sqrt(e^(2+25x))"/>
      <MatrixIn n="5" tag="a"/>
      <MatrixOut n="3" matrix={[1, 2, 3, 4, 5, 6, 7, 8, 9]} tag="a"/>
      <PointsIn n="7"/>
      <VectorIn n="5" tag="b"/>
      <VectorOut n="5" tag="b" vector={[10, 20, 30, 40, 50]}/>
      </form>
    </div>
  );
}

export default App;
