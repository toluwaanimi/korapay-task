require('dotenv').config()
import {createServer} from 'http';
import {app} from './app';
import {sequelize} from './sequelize';

const port = process.env.PORT || 3001;

(async () => {
    await sequelize.sync({logging: false,});
    createServer(app)
        .listen(
            port,
            () => console.info(`Server running on port ${port}`)
        );
})();