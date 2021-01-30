import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
    dialect: 'postgres',
    database: 'korapay',
    port: 5432,
    host: 'localhost',
    username: 'emmanuel',
    password: 'password',
    models: [__dirname + '/models'],
    logging: false,

});
