import React, {Component} from 'react'
import Card from './Сard'

export default class Admin extends Component {

  constructor(props){
    super(props)
    this.getBids = this.getBids.bind(this)
    this.state = { 
      bids: [],
      isLoading: false
    }
  }

  componentDidMount(){
    this.getBids()
  }

  getBids() {
    this.setState({isLoading: true})
    try{
      fetch('http://localhost:5000/admin')
        .then(res => res.json())
        .then(bids => {
          this.setState({bids})
          this.setState({isLoading: false})
        })
    } catch (e) {
      console.log('Error reading the bids.', e)
    }
  }

  render(){
    const {bids, isLoading} = this.state;
    let card = null;

    if (isLoading) {
      card = (
        <div>
          <h2>Loading ...</h2>
        </div>
      )   
    }
    else if (bids.length > 0) {
      card = (
        <Card bids={bids} />
      )  
    }
    
    return(
      <div className='api-data'>
        {card}
      </div>
    )
  }
}
