import React from 'react';
import { useSelector } from 'react-redux';

import { UserForm, ValuesList } from './components'

function App() {
  const storeData = useSelector((state) => state.user);
  const isFilled = !!storeData.firstname;
  return (
      <div className="App">
        <UserForm />
        <hr/>
        {isFilled && <ValuesList />}
      </div>
  );
}

export default App;
