const mongodb = require('mongodb');

const connMongoDB = () => {
    const db = new mongodb.Db(
        'nodejs-got-mmorpg',
        new mongodb.Server(
            'localhost',
            27017,
            {}
        ),
        {}
    );

    return db;
};

module.exports = () => connMongoDB;
