const express = require("express");
const app = express();

const port = 8080;

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about',function(req,res) {
    res.sendFile(__dirname + '/about.html');
});

app.get('/contact',function(req,res) {
    res.sendFile(__dirname + '/contact-me.html');
});

app.get('/404',function(req,res) {
    res.sendFile(__dirname + '/404.html');
});

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})