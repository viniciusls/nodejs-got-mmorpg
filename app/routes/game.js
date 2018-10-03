module.exports = (application) => {
    application.get('/game', (req, res) => {
        application.app.controllers.game.game(application, req, res);
    });
};
