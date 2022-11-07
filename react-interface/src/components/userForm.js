import axios from 'axios'
import React from 'react'
import './formStyle.css'

export default function UserForm() {

  function submitHandler(){
    axios.post("/retrieve", {
      firstName: "Evan",
      lastName: "Zhao"
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    
    <div className="form-container">
        <h2>Projected Retirement Account Statistics</h2>
        <form onSubmit={submitHandler} className="form-Object">
            <label>What is your name?</label>
            <input id="1" className="input"
            type="text"
            name="name"
            //required
            autoComplete="off"
            />
            <label>What is your projected retirement account balance?<br/>(Enter a number)</label>
            <input id="2" className="input"
            type="text"
            name="balance"
            //required
            autoComplete="off"/>
            <label>What do you estimate your yearly expenses to be? <br/>(Enter a number)</label>
            <input id="3" className="input"
            type="text"
            name="expenses"
            //required
            autoComplete="off"
            />
            <label>How many years does this need to last? <br/>(Enter a whole number)</label>
            <input id="4" className="input"
            type="text"
            name="years"
            //required
            autoComplete="off"
            />
            <label>What percentage of your balance will be invested into stocks? <br/>(Enter a value 0-100)</label>
            <input id="5" className="input"
            type="text"
            name="stocks"
            //required
            autoComplete="off"
            />
            <button type="submit" className="submit-button">Submit</button>
        </form>
    </div>
  )
}
