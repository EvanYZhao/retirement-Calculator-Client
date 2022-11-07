import React from 'react'

export default function UserInfo({userProfile}) {
    
    //Conditional Load that makes sure objects are loaded in before rendering to page
    function displayData(){
        if (userProfile.length > 0){
            return(
              <div>
                <p>My name is {userProfile[0].name}</p>
                <p>My projected retirement account balance is ${userProfile[0].retirementBalance}</p>
                <p>I spend about ${userProfile[0].yearly_expenses} per year</p>
                <p>I need this money to last me {userProfile[0].years} years</p>
                <p>I invest about {userProfile[0].stockPercentage}% of my money into stocks</p>
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
