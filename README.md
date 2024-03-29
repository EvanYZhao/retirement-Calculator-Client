# Retirement Calculator!!!
## Important!
- This calculator currently only works by changing your site settings to "Allow" for Insecure Content.
- This calculator is currently not supported on mobile devices, sorry for the inconvenience :(
### Tutorial on How to Allow Insecure Content


https://user-images.githubusercontent.com/96805283/204067262-29d036dd-af8c-4bca-bc1c-cc63c3c3b4d1.mp4



## Overview
This retirement calculator predicts how likely you are to make it past retirement using the following four pieces of information:
1. Predicted retirement account balance
2. Yearly expenses
3. How many years balance needs to last
4. Percentage of balance invested into stocks

## How are my Results Calculated?
Using 40 years worth of data from 1980-2021 from the following 3 sources:
- <a href="https://www.thebalancemoney.com/stocks-and-bonds-calendar-year-performance-417028#toc-figures-from-1928-2021">S&P 500 Stock Index</a>
- <a href="https://www.thebalancemoney.com/stocks-and-bonds-calendar-year-performance-417028#toc-figures-from-1928-2021">Bloomberg Aggregate Bond Index</a>
- <a href="https://www.macrotrends.net/countries/USA/united-states/inflation-rate-cpi">United States Inflation Rates</a>
 
Your data is run through thousands of simulations which utilize the statistics above to generate a highly accurate prediction of your chances to 
successfully make it past retirement based on the 4 data points provided to the calculator.

<b>Important Note:</b> Whatever percentage is invested into stocks, the remaining percentage is assumed to be invested into bonds </br>
<p align="center">e.g. 25% invested into stocks -> 75% invested into bonds</p>

## Interfaces/Languages
- Frontend: React
  - HTML
  - CSS
  - Javascript (JSX)
- Middleware: Flask
  - Python
  
## API
- <a href="https://github.com/EvanYZhao/retirement-Calculator-Server">Click here to redirect to my middleware!</a>
