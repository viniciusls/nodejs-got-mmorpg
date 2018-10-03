module.exports = (application) => {
    application.get('/register', (req, res) => {
        application.app.controllers.register.create(application, req, res);
    });

    application.post('/register', (req, res) => {
        application.app.controllers.register.store(application, req, res);
    });
};
