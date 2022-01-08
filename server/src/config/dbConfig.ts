import { Sequelize, Options } from 'sequelize';

let options: Options;
if (process.env.NODE_ENV === 'production') {
    options = require('./dbConfig.dev').dbConfig;
}
else {
    options = require('./dbConfig.dev').dbConfig;
}

export const sequelize = new Sequelize(options);