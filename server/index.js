const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 4049;
const Archiver = require('archiver');

const fs = require('fs-extra')

const routesPrefix = '/api';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get(`${routesPrefix}/zip/`, function(request, response) {
    // get the contract from the request

    response.writeHead(200, {
        'Content-Type': 'application/zip',
        'Content-disposition': 'attachment; filename=myFile.zip'
    });

    let zip = Archiver('zip');

    zip.pipe(response);

    let id = Date.now();
    let temp = `../temp/reactapp${id}`;
    fs.copySync('../modules/spaceman/reactapp', temp)

    // here we need to add the contract to truffle

    zip.directory(temp, 'reactapp');

    fs.removeSync(temp);

    zip.finalize();
});

app.listen(port, () => console.log(`I'm alive on port ${port}!`))
