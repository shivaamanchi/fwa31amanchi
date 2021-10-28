var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    if (req.method === 'GET') {
        vl = search_params.get("x")
        if(vl === null)
        {
            vl=Math.round(Math.random()*100);
        }
        v2 = search_params.get("x")
        if(v2 === null)
        {
            v2=Math.round(Math.random()*100);
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Math.pow() applied to ' + vl + ' and ' + v2 +' is '+ Math.pow(vl,v2))
        res.write('<br/>Math.sign() applied to ' + vl + ' is ' + Math.sign(vl))
        res.write('<br/>Math.tanh() applied to ' + vl + ' is ' + Math.tanh(vl))
        res.write('<br/>Math.trunc() applied to ' + vl + ' is ' + Math.trunc(vl))
        res.end()
    }
});

module.exports = router;