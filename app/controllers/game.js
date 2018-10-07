module.exports.game = (application, req, res) => {
    if (req.session.user === undefined) {
        res.render('index', { errors: [{ msg: 'Usuário não autenticado' }] });

        return;
    }

    const status = parseInt(req.query.status);
    
    const connection = application.get('database');

    const gamesDAO = new application.app.models.GamesDAO(connection);

    gamesDAO.initGame(req, res, status);
};

module.exports.subjects = (application, req, res) => {
    if (req.session.user === undefined) {
        res.render('index', { errors: [{ msg: 'Usuário não autenticado' }] });

        return;
    }

    res.render('aldeoes');
};

module.exports.orderSubjects = (application, req, res) => {
    if (req.session.user === undefined) {
        res.render('index', { errors: [{ msg: 'Usuário não autenticado' }] });

        return;
    }

    const data = req.body;

    req.assert('action', 'Ação deve ser informada.').notEmpty();
    req.assert('quantity', 'Quantidade deve ser informada.').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
        res.redirect('/game?res=500');

        return;
    }

    const connection = application.get('database');

    const gamesDAO = new application.app.models.GamesDAO(connection);

    switch (data.action) {
        case 1:
            gamesDAO.collect();
            break;
        case 2:
            gamesDAO.kill();
            break;
        case 3:
            gamesDAO.teachHistory();
            break;
        case 4:
            gamesDAO.teachMagic();
            break;
        default:
            break;
    }
    
    res.redirect('/game?res=200');
};

module.exports.scrolls = (application, req, res) => {
    if (req.session.user === undefined) {
        res.render('index', { errors: [{ msg: 'Usuário não autenticado' }] });

        return;
    }

    res.render('pergaminhos');
};
