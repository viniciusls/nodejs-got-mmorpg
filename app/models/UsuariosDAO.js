function UsuariosDAO(connection) {
    this.connection = connection();
}

UsuariosDAO.prototype.save = (data) => {
    this.connection.open((error, mongoclient) => {
        mongoclient.collection('users', (error, collection) => {
            collection.insert(data);

            mongoclient.close();
        });
    });
};

module.exports = () => UsuariosDAO;
