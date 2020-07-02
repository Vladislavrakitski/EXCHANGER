require('dotenv').config();

module.exports = {
	env: process.env.APP_ENV || process.env.NODE_ENV || 'production',
	server: {
		host: process.env.APP_HOST || '127.0.0.1',
		port: parseInt(process.env.APP_PORT || '8000'),
	},
	database: {
		host: process.env.DATABASE_HOST || '127.0.0.1',
		port: parseInt(process.env.DATABASE_PORT || '3306'),
		user: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE_DB,
	},
};
