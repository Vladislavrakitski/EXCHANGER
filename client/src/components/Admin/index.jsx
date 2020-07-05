import React, { useState, useEffect } from 'react';
//import Card from '../Card';

export default () => {
	const [bids, setBids] = useState([]);

	// useEffect(() => {
	// 	try {
	// 		fetch('http://localhost:5000/admin')
	// 			.then(res => res.json())
	// 			.then(bids => {
	// 				setBids(bids);
	// 			});
	// 	} catch (e) {
	// 		console.log('Error reading the bids.', e);
	// 	}
	// }, []);

	if (bids.length > 0) {
		return (
			<div>
				bids
				{/* <Card bids={bids} /> */}
			</div>
		);
	} else {
		return (
			<div>
				<h1>Admin page</h1>
			</div>
		);
	}
};
