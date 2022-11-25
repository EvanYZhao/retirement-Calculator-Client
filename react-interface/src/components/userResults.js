import React from 'react'
import '../styling/resultStyling.css'

export default function UserResults({loaded, retirementResults}) {
    //If post request goes through successfully
    if (loaded){
        //Readability Formatting using toLocaleString(locale='en-US')
        let balance = isNaN(parseInt(retirementResults.retirement_account_balance)) ? 0 : parseInt(retirementResults.retirement_account_balance).toLocaleString('en-US')
        let expenses = isNaN(parseInt(retirementResults.yearly_expenses)) ? 0 : parseInt(retirementResults.yearly_expenses).toLocaleString('en-US')
        let years = isNaN(parseInt(retirementResults.years)) ? 0 : parseInt(retirementResults.years).toLocaleString('en-US')
        let stock = isNaN(parseFloat(retirementResults.stock_percentage))? 0 : parseInt((retirementResults.stock_percentage*100))
        let bond = isNaN(parseFloat(retirementResults.stock_percentage))? 0 : 100-stock
        let final_average = isNaN(parseFloat(retirementResults.final_balance_average)) ? 0 : parseFloat(retirementResults.final_balance_average).toLocaleString('en-US')
        let final_stdev = isNaN(parseFloat(retirementResults.final_balance_stdev)) ? 0 : parseFloat(retirementResults.final_balance_stdev).toLocaleString('en-US')
    
        //User input and result boxes
        return(
            <div className="results-container">
                <div className="user-input">
                    <h3>Your Inputs</h3>
                    <p>With a predicted balance of ${balance}</p>
                    <p>Annual spending of ${expenses}</p>
                    <p>A timeline of {years} years</p>
                    <p>{stock}% invested into stocks</p>
                    <p>{bond}% invested into bonds</p>
                </div>
                <div className="user-results">
                    <h3>Your Results</h3>
                    <p>You have a(n) {retirementResults.percent_successful}% chance of making it past retirement!</p>
                    <p>Your average balance after reaching the end of retirement is ${final_average}</p>
                    <p>The standard deviation for your final average balance is ${final_stdev}</p>
                </div>
            </div>
        )
    }
    //If the .catch() statement in the post request is entered (assuming very first input to the form isn't invalid)
    else if (!loaded && retirementResults!=null){
        return(
            <div className="catch-container">
                <span className="catch-prompt">Oh No! It seems your inputs couldn't be processed correctly. <br/>
                Please refer to problem 2 in the <b>Something Went Wrong!</b> <br/>
                section below</span>
            </div>
        )
    }
    //
    else{
        return(
            <div className="prompt-container">
                <p className="prompt">Submit something to see your results!</p>
            </div>
        )
    }
}
