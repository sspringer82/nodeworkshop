const request = require('request');
const cheerio = require('cheerio');

const url = 'http://www.wetter.com/wetter_aktuell/wettervorhersage/morgen/deutschland/muenchen/DE0006515.html';

request(url, (err, response, body) => {
    let $ = cheerio.load(body);
    console.log($('.clearfix p')[0].children[0].data);
});