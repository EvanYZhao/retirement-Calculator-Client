import React from 'react'
import UserForm from './components/userForm'
import UserResults from './components/userResults'
import Description from './components/description'


export default function App() {

  //Put a useEffect here to call a function that clears cookies on page refresh
  
  return (
    <div className="App">
      <UserForm />
      <UserResults />
      <Description />
    </div>
  );
}

