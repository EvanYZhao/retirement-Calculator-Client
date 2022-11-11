import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function UserResults() {
    const [retirementResults, updateRetirementResults] = useState(null)
    const [loaded, updateLoaded] = useState(false)

    useEffect(() => {
        axios.get('/results')
        .then((res) => {
            updateRetirementResults(res.data)
            updateLoaded(true)
        })
        .catch((err) =>{
            console.log("Error, you haven't input any data yet! Input some data to get your results!")
        })
    }, [])

    if (loaded){
        return(
            <div>
                <p>With a predicted balance of ${retirementResults.retirement_account_balance}</p>
                <p>Annual spending of ${retirementResults.yearly_expenses}</p>
                <p>A timeline of {retirementResults.years} years</p>
                <p>{retirementResults.stock_percentage * 100}% invested into stocks</p>
                <p>You have a {retirementResults.percent_successful}% chance of making it past retirement!</p>
                <p>Your average balance after reaching the end of retirement is ${retirementResults.final_balance_average}</p>
                <p>The standard deviation for your final average balance is ${retirementResults.final_balance_stdev}</p>
            </div>
        )
    }
    else{
        return(
            "Loading your results..."
        )

    }
}
