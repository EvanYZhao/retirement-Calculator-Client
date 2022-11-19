import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../styling/resultStyling.css'

export default function UserResults() {
    const [retirementResults, updateRetirementResults] = useState(null)
    const [loaded, updateLoaded] = useState(false)

    //API requests 
    useEffect(() => {
        //Gets processed data from API
        axios.get('/results')
        .then((res) => {
            updateRetirementResults(res.data)
            updateLoaded(true)
        })
        .catch((err) =>{
            console.log("Error, you haven't input any data yet! Input some data to get your results!")
        })

        //Calls refresh in the API to clear session so refreshing the page yields empty results
        axios.get('/refresh')
        .then((res) => {
            console.log(res.data)
        })
    }, [])

    //Conditional display of either user input and results or loading screen
    if (loaded){

        //Readability Formatting using toLocaleString(locale='en-US')
        let bond = isNaN(parseFloat(retirementResults.stock_percentage))? 0 : parseInt((1 - parseFloat(retirementResults.stock_percentage).toLocaleString('en-US'))*100)
        let balance = isNaN(parseInt(retirementResults.retirement_account_balance)) ? 0 : parseInt(retirementResults.retirement_account_balance).toLocaleString('en-US')
        let expenses = isNaN(parseInt(retirementResults.yearly_expenses)) ? 0 : parseInt(retirementResults.yearly_expenses).toLocaleString('en-US')
        let years = isNaN(parseInt(retirementResults.years)) ? 0 : parseInt(retirementResults.years).toLocaleString('en-US')
        let stock = isNaN(parseFloat(retirementResults.stock_percentage))? 0 : parseFloat(retirementResults.stock_percentage).toLocaleString('en-US')
        let final_average = isNaN(parseFloat(retirementResults.final_balance_average)) ? 0 : parseFloat(retirementResults.final_balance_average).toLocaleString('en-US')
        let final_stdev = isNaN(parseFloat(retirementResults.final_balance_stdev)) ? 0 : parseFloat(retirementResults.final_balance_stdev).toLocaleString('en-US')
    
        return(
            <div className="results-container">
                <div className="user-input">
                    <h3>Your Inputs</h3>
                    <p>With a predicted balance of ${balance}</p>
                    <p>Annual spending of ${expenses}</p>
                    <p>A timeline of {years} years</p>
                    <p>{stock * 100}% invested into stocks</p>
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
    else{
        return(
            <div>
                <div className="loading-animation"></div>
                <span className="loading-results">Loading your results...</span>
            </div>
        )

    }
}
