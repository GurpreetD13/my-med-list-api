// Update config settings with database.


// const connections = {
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
    production: {
        client: 'mysql',
        connection: process.env.JAWSDB_URL,
    },
};

// module.exports =
//     process.env.NODE_ENV === 'production'
//         ? connections.production
//         : connections.development;
