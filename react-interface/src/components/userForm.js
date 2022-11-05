import React from 'react'

export default function UserForm() {
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
    </div>
  )
}
