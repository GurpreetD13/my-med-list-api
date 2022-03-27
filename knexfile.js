// Update config settings with database.


module.exports = {

    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: 'rootroot',
            database: 'my-med-list-db',
            charset: 'utf8',
        },
    },
};
