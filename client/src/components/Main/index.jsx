import React, { useState } from 'react';
import './styles.module.scss';

export default () => {
	const [sell, setSell] = useState(false);

	return (
		<div>
			<h1 className='title'>Main page</h1>
			<div className='container'>
				<button className='button' onClick={() => setSell(false)}>
					buy BTC
				</button>
				<button className='button' onClick={() => setSell(true)}>
					sell BTC
				</button>

				{sell ? (
					<div className='sellBlock'>
						<h1>sell</h1>
					</div>
				) : (
					<div className='buyBlock'>
						<h1>buy</h1>
					</div>
				)}
			</div>
		</div>
	);
};
