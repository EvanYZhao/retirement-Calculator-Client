# Retirement Calculator!!!
 Let's check how on track you are for retirement!

 # Front-end Goals
 - React :white_check_mark:
 - Create a user-friendly interface for collecting user inputs through form elements
 - Use those user inputs to output the data back to the consumer
 - Style the form to make input boxes aligned (flexbox)

 # Back-end Goals
 - Python (Flask) :white_check_mark:
 - Process User Data

 # Both
 - Connect Flask to React using proxy :white_check_mark:
 - Figure out how to start my Flask API and my React GUI simultaneously
 - Learn how to take POST requests and process data in the backend before sending it back to the front end

 # CURRENT ISSUES
 - Problem 1: Starting up React by itself makes it impossible to fetch data from the Flask backend unless they're both activated at the same time.
 - Fix 1: Change the "react-start" script in package.json to run flask simultaneously with React
 - Problem 2: Currently have volatile files (.env __pycache) that I do not want to be pushed. Learn how to add these to gitignore.
 - Fix 2: Figure out .gitignore syntax
 - Problem 3: Form component is child of App but the App contains all the state variables. How do I get values from form component to the App state variables?
 - Fix 3: Change dependencies maybe? Or figure out if I can solve problem with props or not.
