import React, { Component } from 'react';

export default class Card extends Component{
  render(){
    let {bids} = this.props;

    let bid = bids[0]

    
    let d = new Date(bid.date);
    let newDate = `${d.getDate()}-${d.getMonth() + 1}-${d.getUTCFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    
    console.log(newDate);

    return(
      <div>
        <h1>{bid.id}</h1>
        <h3>{bid.inp_sum}</h3>
        <h3>{bid.out_sum}</h3>
        <h3>{bid.inp_val}</h3>
        <h3>{bid.out_val}</h3>
        <h3>{bid.inp_wal}</h3>
        <h3>{bid.out_wal}</h3>
        <h1>{bid.date}</h1>
      </div>
    )
  }
}