function UsersDAO(connection) {
    this.connection = connection;
}

UsersDAO.prototype.save = function (data) {
    this.connection.collection('users', (error, collection) => {
        collection.insert(data);
    });
};

module.exports = function () {
    return UsersDAO;
};

