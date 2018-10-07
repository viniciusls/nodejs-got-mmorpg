module.exports.game = (application, req, res) => {
    if (req.session.user === undefined) {
        res.render('index', { errors: [{ msg: 'Usuário não autenticado' }] });

        return;
    }
    
    const connection = application.get('database');

    const gamesDAO = new application.app.models.GamesDAO(connection);

    gamesDAO.initGame(req, res);
};

module.exports.subjects = (application, req, res) => {
    res.render('aldeoes');
};

module.exports.scrolls = (application, req, res) => {
    res.render('pergaminhos');
};
