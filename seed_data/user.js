const bcrypt = require('bcrypt');

module.exports = [
    {
        id: 1,
        name: 'Cupid',
        user_name: 'User1',
        password: bcrypt.hashSync('heart',10),
    },
    {
        id: 2,
        name: 'Sweet Tooth',
        user_name: 'User2',
        password: bcrypt.hashSync('sugar',10),
    },
    {
        id: 3,
        name: 'Sweet Heart',
        user_name: 'User3',
        password: bcrypt.hashSync('kind',10),
    },
];