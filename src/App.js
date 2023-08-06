import React from 'react';
import { useSelector } from 'react-redux';

import { UserForm } from './components'

function App() {
  const storeData = useSelector((state) => state.user);
  console.log('STORE DATA', storeData)

  return (
      <div className="App">
        <UserForm />
      </div>
  );
}

export default App;
