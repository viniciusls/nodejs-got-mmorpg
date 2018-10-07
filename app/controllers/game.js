module.exports.game = (application, req, res) => {
    if (req.session.user === undefined) {
        res.render('index', { errors: [{ msg: 'Usuário não autenticado' }] });

        return;
    }

    let errors = false;

    if (parseInt(req.query.res) === 500) {
        errors = true;
    }
    
    const connection = application.get('database');

    const gamesDAO = new application.app.models.GamesDAO(connection);

    gamesDAO.initGame(req, res, errors);
};

module.exports.subjects = (application, req, res) => {
    res.render('aldeoes');
};

module.exports.orderSubjects = (application, req, res) => {
    const data = req.body;

    req.assert('action', 'Ação deve ser informada.').notEmpty();
    req.assert('quantity', 'Quantidade deve ser informada.').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
        res.redirect('/game?res=500');

        return;
    }

    res.send('Sucesso');
};

module.exports.scrolls = (application, req, res) => {
    res.render('pergaminhos');
};
