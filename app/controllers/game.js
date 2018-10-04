module.exports.game = (application, req, res) => {
    if (req.session.user === undefined) {
        res.render('index', { errors: [{ msg: 'Usuário não autenticado' }] });

        return;
    }
    
    res.render('jogo');
};
