import React, {useState, useEffect} from 'react'
import axios from 'axios'
import UserForm from './components/userForm'
import UserInfo from './components/userInfo'

export default function App() {

  //profileData created as an array so conditional load checking is possible (profileData.length > 0?)
  const [profileData, setProfileData] = useState(null)

  useEffect(() => {
    axios.get("/profile")
    .then(res => {
    setProfileData({
      "name": res.data.name,
      "retirement_account_balance": res.data.retirement_account_balance,
      "yearly_expenses": res.data.yearly_expenses,
      "years": res.data.years,
      "stock_percentage": res.data.stock_percentage
    })
  })
  }, [])

  return (
    <div className="App">
      <UserForm />
      <UserInfo userProfile={profileData}/>
    </div>
  );
}

