module.exports = (application) => {
    application.get('/game/subjects', (req, res) => {
        application.app.controllers.game.subjects(application, req, res);
    });

    application.post('/game/subjects/order', (req, res) => {
        application.app.controllers.game.orderSubjects(application, req, res);
    });

    application.get('/game/scrolls', (req, res) => {
        application.app.controllers.game.scrolls(application, req, res);
    });

    application.get('/game', (req, res) => {
        application.app.controllers.game.game(application, req, res);
    });
};
