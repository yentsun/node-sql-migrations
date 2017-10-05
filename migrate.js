var path = require('path');

require('./').run({
    basedir: __dirname,
    migrationsDir: path.resolve(__dirname, 'migrations'),
    pg: {
        user: 'postgres',
        host: 'localhost',
        database: 'sql_migrations'
    }
});
