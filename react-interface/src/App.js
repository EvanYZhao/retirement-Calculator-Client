import React, {useState, useEffect} from 'react'
import axios from 'axios'
import UserForm from './components/userForm'

export default function App() {

  const [profileData, setProfileData] = useState(null)
  const [name, setName] = useState('')
  const [retirementBalance, setRetirementBalance] = useState(0)
  const [yearlyExpenses, setYearlyExpenses] = useState(0)
  const [years, setYears] = useState(0)
  const [stockPercentage, setStockPercentage] = useState(0)

  return (
    <div className="App">
      <UserForm />
    </div>
  );
}

