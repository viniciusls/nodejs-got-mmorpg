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

GamesDAO.prototype.initGame = function (req, res) {
    this.connection.collection('games', (error, collection) => {
        collection.find({ user: req.session.user.username }).toArray((error, result) => {
            console.log(result[0]);
            res.render('jogo', { house: req.session.user.house, params: result[0] });
        });
    });
};

module.exports = function () {
    return GamesDAO;
};

