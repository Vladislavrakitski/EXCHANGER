import React, {useState, useEffect} from 'react'
import Card from './Сard'

const Admin = function(){

  const [bids, setBids] = useState([]);

  // useEffect(() => {
  //   try {
  //     fetch('http://localhost:5000/admin')
  //       .then(res => res.json())
  //       .then(bids => {
  //         setBids(data)
  //       }) 
  //   } catch (e) {
  //     console.log('Error reading the bids.', e)
  //   }
  // }, [])

  return(
    <div>
      <h1>Admin page</h1>
      {/* <Card bids={bids} /> */}
    </div>
  )
}

export default Admin