const express = require('express');

const db = require('./model/db');
const config = require('./config');

const app = express();

db.query('SELECT 1');

(async () => {
	try {
		app.listen(config.server.port, config.server.host, () => {
			console.log(`Web server has been started on port ${config.server.port}`);
		});
	} catch (err) {
		console.log(err);
	}
})();

// const bids = new Client({
// 	user: 'postgres',
// 	password: 'postgres',
// 	host: config.get('dataHost'),
// 	port: config.get('dataPort'),
// 	database: config.get('dataBase'),
// });

// app.use('/', express.static(path.join(__dirname, 'client')));

// app.get('/admin', cors(), async (req, res) => {
// 	const rows = await getAllBids();
// 	res.setHeader('content-type', 'application/json');
// 	res.send(JSON.stringify(rows));
// });

// app.listen(PORT, () =>
// 	console.log(`Web server has been started on port ${PORT}`)
// );

// start()
// connect to database

// async function start() {
//   await connect()
// }

// async function connect() {
//   try {
//     await bids.connect()
//     console.log('Connected successfully.')
//   }
//   catch(e) {
//     console.error(`Failed to connect ${e}`)
//   }
// }

// async function getAllBids() {
//   try{
//     const {rows} = await bids.query('SELECT * FROM bids')
//     return rows
//   } catch (e) {
//     console.log(`Something wrong happend ${e}`)
//   }
// finally {
//   await bids.end()
//   console.log('Client disconnected successfully.')
// }
// }

// async function createBid(bid){
//   try {
//     await bids.connect()
//     await bids.query('INSERT INTO bids VALUES ($1)', [bid])
//   } catch(e) {
//     console.log(`Something wrong happend ${e}`)
//   } finally {
//     await bids.end()
//     date = null;
//     console.log('Client disconnected successfully.')
//   }
// }
