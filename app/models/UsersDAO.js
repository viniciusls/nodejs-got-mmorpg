function UsersDAO(connection) {
    this.connection = connection;
}

UsersDAO.prototype.save = function (data) {
    this.connection.collection('users', (error, collection) => {
        collection.insert(data);
    });
};

UsersDAO.prototype.authenticate = function (data) {
    this.connection.collection('users', (error, collection) => {
        collection.find(data).toArray((error, result) => result[0]);
    });
};

module.exports = function () {
    return UsersDAO;
};

