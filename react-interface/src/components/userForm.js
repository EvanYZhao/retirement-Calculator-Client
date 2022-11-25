import axios from 'axios'
import React, {useState} from 'react'
import UserResults from './userResults'
import '../styling/formStyle.css'

export default function UserForm() {
  const [loaded, updateLoaded] = useState(false)
  const [retirementResults, updateRetirementResults] = useState(null)
  
  //Whenever submit button is hit, this function is called
  function submitHandler(e){
    //Prevents refresh
    e.preventDefault()
    //Hard-coding of JSON object of user inputs
    let object = {
      "retirement_account_balance": e.target[0].value,
      "yearly_expenses": e.target[1].value,
      "years": e.target[2].value,
      "stock_percentage": e.target[3].value
    }

    //Sending post request of user input to backend
    axios.post("retrieve", object)
    .then((response) => {
      updateLoaded(true) //Set true if post request returns valid data
      updateRetirementResults(response.data)
    })
    .catch((error) => {
      updateLoaded(false) //Set false if post request returns invalid data (indefinite loading screen problem)
    })

    e.target.reset()
  }

  //JSX for the conditional input form that grabs user data for processing in the backend
  return (
    <div className="form-container">
        <h2>Projected Retirement Account Statistics</h2>
        <form onSubmit={submitHandler} className="form-object">
            <label>What is your projected retirement account balance?<br/>(Enter a positive number)</label>
            <input
            className="input"
            type="number"
            name="retirement_account_balance"
            min="0"
            required
            autoComplete="off"
            />
            <label>What do you estimate your yearly expenses to be? <br/>(Enter a positive number)</label>
            <input
            className="input"
            type="number"
            name="yearly_expenses"
            min="0"
            required
            autoComplete="off"
            />
            <label>How many years does this need to last? <br/>(Enter a reasonable whole number (1 - 100))</label>
            <input
            className="input"
            type="number"
            name="years"
            min="1"
            max="100"
            required
            autoComplete="off"
            />
            <label>What percentage of your balance will be invested into stocks? <br/>(Enter a value 0-100)</label>
            <input
            className="input"
            type="number"
            min="0"
            max="100"
            name="stock_percentage"
            required
            autoComplete="off"
            />
            <button type="submit" className="submit-button">Submit</button>
        </form>
        <UserResults loaded={loaded} retirementResults={retirementResults}/>
    </div>
  )
}
