import React from 'react'
 import './App.css';
import Profile from './profile/Profile';
 
function App() {
  return (
    <div className="App">
      
      <Profile name={"Dribek chiheb"} bio={"Born in 1992"} profession={"Studient"}
      image={<img  style={{borderRadius:"50%"}} src="https://media-exp1.licdn.com/dms/image/C4D03AQF_vRT-PIwJcw/profile-displayphoto-shrink_200_200/0/1598699242147?e=1622073600&v=beta&t=rfx_hISdFyJwN6CxaV73C6wqYeZ-YiAq3AUu8xwMFWQ" />}
      
      />


 
    </div>
  );
}

export default App;
