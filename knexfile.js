// Update config settings with database.


module.exports = {

    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'root',
            password: 'rootroot',
            database: 'my_med_list_db',
            charset: 'utf8',
        },
    },
};
