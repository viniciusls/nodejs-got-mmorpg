module.exports = (application) => {
    application.get('/register', (req, res) => {
        application.app.controllers.register.create(application, req, res);
    });
};
