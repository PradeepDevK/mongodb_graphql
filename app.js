const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;

const schema = require('./schema/schema');
const mongo = require('mongoose');

const app = express();

mongo.connect('mongodb://localhost:27017/gql-demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongo.connection.once('open', () => {
    console.log('connected to database');
})

app.use('/graphiql', graphqlHTTP({ schema: require('./schema/schema.js'), graphiql: true
}))

app.listen(8080, () => {
    console.log('Server running succefully...')
})