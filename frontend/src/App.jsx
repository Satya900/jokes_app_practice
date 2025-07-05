import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
function App() {
 
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
    // fetching jokes from backend API
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data);
      console.log(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  })

  return (
    <>
     <div>
      <h1>Hello, Satya</h1>
     <p>Welcome to my react APP</p>
     </div>
     <div>
      <p>JOKES COUNT : {jokes.length}</p>
      {
        // This is where we will map through the jokes and display them
        // Assuming jokes is an array of objects with id, title, and content properties
        jokes.map((joke)=>{
          return (<div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>)
        })
      }
     </div>
     
    </>
  )
}

export default App
