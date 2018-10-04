function UsersDAO(connection) {
    this.connection = connection;
}

UsersDAO.prototype.save = function (data) {
    this.connection.collection('users', (error, collection) => {
        collection.insert(data);
    });
};

UsersDAO.prototype.authenticate = function (data, req, res) {
    this.connection.collection('users', (error, collection) => {
        collection.find(data).toArray((error, result) => {
            if (result[0] === undefined) {
                res.render('index', { errors: [{ msg: 'Usuário ou senha incorretos.' }] });
        
                return;
            }
        
            req.session.user = result[0];

            res.redirect('/game');
        });
    });
};

module.exports = function () {
    return UsersDAO;
};

