import React, {Component} from 'react'

function App () {

  let bid
  getBids()

  async function getBids () {
    try{
      await fetch('http://localhost:5000/main')
        .then(res => res.json())
        .then(bids => {
          bid = bids[0]
        })
        console.log(bid)
    } catch (e) {
      console.log('Error reading the bids.', e)
    }
  }

  return (
    <div>
      
    </div>
  )
}

export default App