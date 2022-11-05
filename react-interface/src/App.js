import React, {useState, useEffect} from 'react'
import axios from 'axios'
import logo from './images/logo192.png'

export default function App() {

  const [profileData, setProfileData] = useState(null)

  function getData(){
    axios.get("/profile")
    .then(res => {
      setProfileData({
        "profile_name": res.data.name,
        "about_me": res.data.about })}
        )
    .catch(error => {
      console.log(error.response)
      console.log(error.response.status)
      console.log(error.response.headers)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* new line start*/}
        <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
        }
         {/* end of new line */}
      </header>
    </div>
  );
}

