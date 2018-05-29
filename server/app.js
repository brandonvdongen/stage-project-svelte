//todo express vervangen met eigen http/routing
const express = require('express');
const fetch = require('node-fetch'); //node fetch voor de consistency met de clientside javascript
const app = express();

/***
 * search route, formatted as localhost/search/[tags]/[page number]
 */
app.get(['/search/:search/', '/search/:search/:page'], (req, res) => {
    console.log(req.params);
    const page = req.params.page || 1;
    const per_page = 50;
    const url = "https://pixabay.com/api/?key=8990826-747bd9300ee0354a8b5e85d26&q=" + encodeURI(req.params.search) + "&image_type=photo&per_page=" + per_page + "&page=" + page + "&orientation=horizontal";
    fetch(url).then(value => {
        return value.json();
    }).then(value => {
        value["status"]="success";
        console.log(value);
        res.send(value);
    }).catch(reason=>{
        reason["status"]="error";
        res.send(reason);
    });
});

app.use(express.static('../public'));

app.listen(8888, () => console.log('Example app listening on port 8888!'));