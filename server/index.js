const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 4049;

const routesPrefix = '/api';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// capsule routes
app.post(`${routesPrefix}/accounts/`, function(req, res) {
    // start ganache return accounts

    res.status(200).send(accounts);
});

app.listen(port, () => console.log(`I'm alive on port ${port}!`))
