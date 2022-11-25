import React from 'react'
import '../styling/descriptionStyling.css'

export default function Description() {
  return (
    <div className="description">
        <h2>How Are my Results Calculated?</h2>
        <p>This retirement calculator takes your data and runs thousands of simulations
            through 40 years of statistics from the S&P 500 Stock Index,<br/> the Bloomberg Aggregate Bond Index,
            and inflation rates to calculate your final results!</p>
        <p><b>Important Note:</b> Whatever percentage you choose to invest into stocks, the remaining
            percentage will automatically be assumed to be invested into bonds. <br/>
            e.g. 25% invested into stocks, 75% assumed to be invested into bonds </p>
        <h2>Something Went Wrong!</h2>
        <h3>Problem 1: My inputs have 0 for all my results?</h3>
        <p>The calculator is only designed to take reasonable inputs - i.e. yearly expenses do not exceed predicted balance. <br/>
            in the case of unreasonable inputs, the calculator will display 0 for all results.</p>
        <h3>Problem 2: My inputs couldn't be processed correctly?</h3>
        <p>This is most likely due to an input combination where years*expenses (years times expenses) is considerably greater than <br/>
            what your projected balance is. It is safe to assume that there is close to a 0 percent chance success rate in this case.<br/>
            To fix the indefinite loading screen, simply refresh the page or submit new <b>reasonable</b> values into the form.</p>
    </div>
  )
}
