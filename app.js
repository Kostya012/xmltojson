const convert = require('xml-js');
let xml = require('fs').readFileSync('./verschidene.xml', 'utf8');

let result = convert.xml2json(xml, {compact: true, spaces: 4});

let fs = require('fs')

fs.appendFile('./verschidene.json', result, function (err) {
    if (err) throw err;
    console.log('Saved!');
});
console.log(result)