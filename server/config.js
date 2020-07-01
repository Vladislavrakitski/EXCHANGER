const { env } = require('process');

module.exports = {
	env: env.APP_ENV || process.NODE_ENV || 'production',
	server: {
		host: env.APP_HOST || '127.0.0.1',
		port: parseInt(env.APP_PORT || '8000'),
	},
	// database: {
	// 	host: env.DATABASE_HOST || '127.0.0.1',
	// 	port: parseInt(env.DATABASE_PORT || '3306'),
	// 	user: env.DATABASE_USER,
	// 	password: env.DATABASE_PASSWORD,
	// 	database: env.DATABASE_DB || 'interimdb',
	// },
};
