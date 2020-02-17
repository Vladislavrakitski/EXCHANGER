import React from 'react'

function App () {

  getBids()

  async function getBids () {
    try{
      const result = await fetch("http://localhost:5000/main", {method:"GET", mode:'no-cors'})
      const bids = await result.json();
      console.log(bids[0])
    } catch (e) {
      console.log("Error reading the bids.")
    }
  }

  return (
    <div>
      <h1>hello there!</h1>
    </div>
  )
}

export default App