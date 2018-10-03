module.exports = (application) => {
    application.get('/register', (req, res) => {
        res.render('register');
    });
};
