import winston from 'winston';

const logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({
			level: 'debug',
			json: true,
			handleExceptions: true
		})
	],
	exitOnError: false
});

module.exports = logger;
