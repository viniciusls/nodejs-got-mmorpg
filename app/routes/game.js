module.exports = (application) => {
    application.get('/game', (req, res) => {
        res.render('game');
    });
};
