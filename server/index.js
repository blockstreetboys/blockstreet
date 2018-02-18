const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 4049;
const Archiver = require('archiver');

const routesPrefix = '/api';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get(`${routesPrefix}/zip/`, function(request, response) {
    const { contract, testCases } = request.query;

    response.writeHead(200, {
        'Content-Type': 'application/zip',
        'Content-disposition': 'attachment; filename=astronaut.zip'
    });

    let zip = Archiver('zip');

    zip.pipe(response);

    zip.directory('../modules/spaceman/reactapp/', 'reactapp');
    zip.directory('../modules/spaceman/truffle/migrations', 'reactapp/truffle/migrations');
    zip.directory('../modules/spaceman/truffle/tests', 'reactapp/truffle/tests');

    zip.file('../modules/spaceman/truffle/contracts/Migrations.sol', { name: 'reactapp/truffle/contracts/Migrations.sol' });

    zip.append(contract || "", { name: 'reactapp/truffle/contracts/astronaut.sol' })
    zip.append(testCases || "", { name: 'reactapp/truffle/tests/astronaut.js' })

    zip.finalize();
});

app.listen(port, () => console.log(`I'm alive on port ${port}!`))
