import React from 'react';
import FunctionIn from './Components/FunctionIn';
import FloatIn from './Components/FloatIn';
import UnsignedIntegerIn from './Components/UnsignedIntegerIn';

function App() {
  return (
    <div>
      <form>
      <FunctionIn id="id" name="name" tag="tag"/>
      <FloatIn id="id" name="name" tag="tag"/>
      <UnsignedIntegerIn id="id" name="name" tag="tag"/>
      </form>
    </div>
  );
}

export default App;
