module.exports.login = (application, req, res) => {
    const data = req.body;

    req.assert('username', 'Usuário não pode ser vazio.').notEmpty();
    req.assert('password', 'Senha não pode ser vazia.').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
        res.render('index', { errors });

        return;
    }

    const connection = application.get('database');

    const usersDAO = new application.app.models.UsersDAO(connection);

    usersDAO.authenticate(data, req, res);
    
    //console.log(req.session.user);
    //if (req.session.user === undefined) {
    //    res.render('index', { errors: [{ msg: 'Usuário ou senha incorretos.' }] });

    //    return;
    //}

    //res.redirect('/game');
};

module.exports.logout = (application, req, res) => {
    req.session.destroy((error) => {
        res.redirect('/');
    });
};
