import React, {useState, useEffect} from 'react'
import axios from 'axios'
import UserForm from './components/userForm'
import UserInfo from './components/userInfo'

export default function App() {

  //profileData created as an array so conditional load checking is possible (profileData.length > 0?)
  const [profileData, setProfileData] = useState(null)
  // const [name, setName] = useState('')
  // const [retirementBalance, setRetirementBalance] = useState(0)
  // const [yearlyExpenses, setYearlyExpenses] = useState(0)
  // const [years, setYears] = useState(0)
  // const [stockPercentage, setStockPercentage] = useState(0)

  useEffect(() => {
    axios.get("/profile")
    .then(res => {
    setProfileData([{
      "name": res.data.name,
      "retirementBalance": res.data.retirement_account_balance,
      "stockPercentage": res.data.stock_percentage,
      "yearly_expenses": res.data.yearly_expenses,
      "years": res.data.years}])
  })
  }, [])

  return (
    <div className="App">
      <UserForm/>
      <UserInfo userProfile={profileData}/>
    </div>
  );
}

