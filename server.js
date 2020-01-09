const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const Port = process.env.PORT || 3000;
const relinkEndpoint = 'https://rel.ink/api/links/';



const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

app.get('/', (req, res) => {

    res.sendFile(__dirname+ '/public/index.html')
})

app.post('/', (req, res) => {
    // const url = req.body.url;
    // const payload = { 'url': url }
    // // console.log(JSON.stringify(payload));
    // let shortUrl=''
    // request.post(relinkEndpoint,
    //     { json: payload },
    //     (err, re, body) => {
    //         if (err) { console.log(err); }
    //         // console.log(body);
    //         if (re.statusCode == 201) {
    //              shortUrl = 'https://rel.ink/'+ body.hashid;
    //             console.log(shortUrl)
    //         }
    // });
    // document.getElementsByClassName('original').innerHTML = url;
    // document.getElementsByClassName('shorten').innerHTML = shortUrl;
    res.redirect('/');
})


app.listen(Port, (err) => {
    if (err) { console.log(err) }
    console.log('server running at port 3000');
})