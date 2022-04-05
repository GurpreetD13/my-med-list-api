const bcrypt = require('bcrypt');

module.exports = [
    {
        id: 1,
        name: 'Sweet Tooth',
        user_name: 'User1',
        password: bcrypt.hashSync('sugar', 10),
    },
    {
        id: 2,
        name: 'Cupid',
        user_name: 'User2',
        password: bcrypt.hashSync('heart', 10),
    },
];