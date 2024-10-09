const express = require('express');
const { homeRouter } = require('./src/routes');
const { connectToMongo } = require('./src/db/mongo.connect');

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(homeRouter);

app.listen(PORT, async() => {
    console.log(`Server running on ${PORT}`);
    await connectToMongo();
});