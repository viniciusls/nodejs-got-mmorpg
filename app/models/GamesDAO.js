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

GamesDAO.prototype.initGame = function (req, res, status) {
    this.connection.collection('games', (error, collection) => {
        collection.find({ user: req.session.user.username }).toArray((error, result) => {
            console.log(result[0]);
            res.render('jogo', { house: req.session.user.house, params: result[0], status });
        });
    });
};

GamesDAO.prototype.collect = function (req, res) {
    this.connection.collection('acao', (error, collection) => {
        const date = new Date();
        const currentDate = date.getTime();

        collection.insert({
            user: req.session.user.username,
            action: 1,
            quantity: req.body.quantity,
            init_at: currentDate,
            finish_at: currentDate + (1 * 60 * 60 * 1000)
        });
    });
};

GamesDAO.prototype.kill = function (req, res) {
    this.connection.collection('acao', (error, collection) => {
        const date = new Date();
        const currentDate = date.getTime();

        collection.insert({
            user: req.session.user.username,
            action: 1,
            quantity: req.body.quantity,
            init_at: currentDate,
            finish_at: currentDate + (2 * 60 * 60 * 1000)
        });
    });
};

GamesDAO.prototype.teachHistory = function (req, res) {
    this.connection.collection('acao', (error, collection) => {
        const date = new Date();
        const currentDate = date.getTime();


        collection.insert({
            user: req.session.user.username,
            action: 1,
            quantity: req.body.quantity,
            init_at: currentDate,
            finish_at: currentDate + (5 * 60 * 60 * 1000)
        });
    });
};

GamesDAO.prototype.teachMagic = function (req, res) {
    this.connection.collection('acao', (error, collection) => {
        const date = new Date();
        const currentDate = date.getTime();

        collection.insert({
            user: req.session.user.username,
            action: 1,
            quantity: req.body.quantity,
            init_at: currentDate,
            finish_at: currentDate + (5 * 60 * 60 * 1000)
        });
    });
};

module.exports = function () {
    return GamesDAO;
};

