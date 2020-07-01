import React from 'react';

export default props => {
	console.log(props);

	let bids = props.bids;
	let bid = bids[0];
	let d = new Date(bid.date);
	let newDate = `${d.getDate()}-${
		d.getMonth() + 1
	}-${d.getUTCFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

	return (
		<div>
			<h1>{bid.id}</h1>
			<h3>
				{bid.inp_sum} {bid.inp_val}
			</h3>
			<h3>
				{bid.out_sum} {bid.out_val}
			</h3>
			<h3>{bid.inp_wal}</h3>
			<h3>{bid.out_wal}</h3>
			<h1>{newDate}</h1>
		</div>
	);
};
