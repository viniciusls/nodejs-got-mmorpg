module.exports.create = (application, req, res) => {
    res.render('cadastro', { errors: {}, data: {} });
};

module.exports.store = (application, req, res) => {
    const data = req.body;

    req.assert('name', 'Nome não pode ser vazio.').notEmpty();
    req.assert('username', 'Usuário não pode ser vazio.').notEmpty();
    req.assert('password', 'Senha não pode ser vazia.').notEmpty();
    req.assert('house', 'Casa não pode ser vazia.').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
        res.render('cadastro', { errors, data });
        return;
    }

    const connection = application.config.database;

    const UsuariosDAO = new application.app.models.UsuariosDAO(connection);

    UsuariosDAO.save(data);

    res.redirect('');
};

