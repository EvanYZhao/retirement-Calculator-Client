import React from 'react'

export default function UserInfo({userProfile}) {

    //Conditional Load that makes sure objects are loaded in before rendering to page
    function displayData(){
        if (userProfile != null){
            return(
              <div>
                <p>My name is {userProfile.name}</p>
                <p>My projected retirement account balance is ${userProfile.retirement_account_balance}</p>
                <p>I spend about ${userProfile.yearly_expenses} per year</p>
                <p>I need this money to last me {userProfile.years} years</p>
                <p>I invest about {userProfile.stock_percentage}% of my money into stocks</p>
              </div>
            )
          }
          else{
            return <p>Loading...</p>
          }
    }

  return (
    <div>
        {displayData()}
    </div>
  )
}
