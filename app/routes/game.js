module.exports = (application) => {
    application.get('/game', (req, res) => {
        application.app.controllers.game.game(application, req, res);
    });

    application.get('/subjects', (req, res) => {
        application.app.controllers.game.subjects(application, req, res);
    });

    application.get('/scrolls', (req, res) => {
        application.app.controllers.game.scrolls(application, req, res);
    });
};
