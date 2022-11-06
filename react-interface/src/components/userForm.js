import React from 'react'

export default function UserForm({object}) {

  //Conditional Load that makes sure objects are loaded in before rendering to page
  function displayData(){
    if (object.length > 0){
      return(
        <div>
          <p>My name is {object[0].name}</p>
          <p>My projected retirement account balance is ${object[0].retirementBalance}</p>
          <p>I spend about ${object[0].yearly_expenses} per year</p>
          <p>I need this money to last me {object[0].years} years</p>
          <p>I invest about {object[0].stockPercentage}% of my money into stocks</p>
        </div>
      )
    }
    else {
      return <h1>Loading...</h1>
    }

  }

  return (
    <div className="form-container">
        <h2>Projected Retirement Account Statistics</h2>
        <form>
            <label>What is your name?</label>
            <input 
            type="text"
            required
            />
            <label>What is your projected retirement account balance? (Enter a number)</label>
            <input
            type="text"
            required/>
            <label>What do you estimate your yearly expenses to be? (Enter a number)</label>
            <input
            type="text"
            required
            />
            <label>How many years does this need to last? (Enter a whole number)</label>
            <input
            type="text"
            required/>
            <label>What percentage of your balance will be invested into stocks? (Enter a value 0-100)</label>
            <input
            type="text"
            required/>
            <button>Submit</button>
        </form>
        {displayData()}
    </div>
  )
}
