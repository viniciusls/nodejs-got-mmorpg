module.exports.login = (application, req, res) => {
    const data = req.body;

    req.assert('username', 'Usuário não pode ser vazio.').notEmpty();
    req.assert('password', 'Senha não pode ser vazia.').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
        res.render('home', { errors });

        return;
    }

    res.redirect('/game');
};
