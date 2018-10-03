const app = require('./config/server');
const mongodb = require('mongodb');

mongodb.MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (err, client) => {
    app.listen(3000, () => {
        const database = client.db('nodejs-got-mmorpg');

        app.set('database', database);

        console.log('Server is running');
    });
});
