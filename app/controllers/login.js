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

    const result = usersDAO.authenticate(data);

    if (result === undefined) {
        res.render('index', { errors: { msg: 'Usuário ou senha incorretos.' } });
    }

    req.session.user = result[0];

    res.redirect('/game');
};
