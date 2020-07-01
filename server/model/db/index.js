const mysql = require('mysql');

const { database } = require('../../config');

const db = mysql.createConnection(database);

db.connect(err => {
	console.log(`Attempt connection to database`);
	if (err) {
		console.log(err);
		console.log(`Failed database connection`);
		process.exit(1);
	} else {
		console.log(`Successful database connection`);
	}
});

module.exports = db;
