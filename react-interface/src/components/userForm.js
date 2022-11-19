import axios from 'axios'
import React, {useState} from 'react'
import '../styling/formStyle.css'

const initialFormData = {
  retirement_account_balance: 0,
  yearly_expenses: 0,
  years: 0,
  stock_percentage: 0
}

export default function UserForm() {
  const [formData, updateFormData] = useState(initialFormData)

  //Updates formData state every time the input changes 
  //(e.target.name shows name of form element being accessed. [] stringifies the form name)
  //(e.target.value shows the current value being manipulated in any one of the text boxes)
  const changeHandler = (e) => {
    updateFormData(
      {
        ...formData,

        [e.target.name]: e.target.value.trim()
      })
  }

  //POSTs the final variables to the API after hitting submit button
  const submitHandler = () => {
    axios.post("/retrieve", formData)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
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
            onChange={changeHandler}/>
            <label>What do you estimate your yearly expenses to be? <br/>(Enter a positive number)</label>
            <input
            className="input"
            type="number"
            name="yearly_expenses"
            min="0"
            required
            autoComplete="off"
            onChange={changeHandler}
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
            onChange={changeHandler}
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
            onChange={changeHandler}
            />
            <button type="submit" className="submit-button">Submit</button>
        </form>
    </div>
  )
}
