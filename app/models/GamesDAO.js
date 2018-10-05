function GamesDAO(connection) {
    this.connection = connection;
}

GamesDAO.prototype.generateParams = function (username) {
    this.connection.collection('games', (error, collection) => {
        collection.insert({
            user: username,
            money: 15,
            subjects: 10,
            fear: Math.floor(Math.random() * 1000),
            wisdom: Math.floor(Math.random() * 1000),
            trade: Math.floor(Math.random() * 1000),
            magic: Math.floor(Math.random() * 1000)
        });
    });
};

// GamesDAO.prototype.authenticate = function (data, req, res) {
//     this.connection.collection('users', (error, collection) => {
//         collection.find(data).toArray((error, result) => {
//             if (result[0] === undefined) {
//                 res.render('index', { errors: [{ msg: 'Usuário ou senha incorretos.' }] });
        
//                 return;
//             }
        
//             delete result[0].password;
            
//             req.session.user = result[0];

//             res.redirect('/game');
//         });
//     });
// };

module.exports = function () {
    return GamesDAO;
};

