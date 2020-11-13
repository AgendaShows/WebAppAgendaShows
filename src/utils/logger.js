const {createLogger, format, transports} = require('winston');

const logs = createLogger({

    format: format.combine(
        format.simple(), 
        format.timestamp(),
        format.printf(info => `[${info.timestamp}] ${info.level} ${info.message}`)
    ),
    transports: [
        new transports.File({
            maxsize: 5120000,
            maxFiles: 5,
            filename: `${__dirname}/../logs/backlogs.log`
        }),
        new transports.Console({
            level: 'debug'
        })
    ]
});


module.exports = logs;