import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>starting</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default App;