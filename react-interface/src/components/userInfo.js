import React from 'react'

export default function UserInfo({formData}) {

  return (
    <div>
        <p>My name is {formData.name}</p>
        <p>I'm planning to save ${formData.retirement_account_balance} for retirement</p>
        <p>I spend around ${formData.yearly_expenses} every year</p>
        <p>I need my retirement money to last for {formData.years} years</p>
        <p>I'm going to invest {formData.stock_percentage}% of my retirement money into a stock fund</p>
    </div>
  )
}
