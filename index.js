const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 8080

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile('index.html', (err, file) => {
            if (err) throw err;
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            return res.end(file);
        })
    } else if (req.url === "/about") {
        fs.readFile('about.html', (err, file) => {
            if (err) throw err;
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            return res.end(file);
        })
    } else if (req.url === "/contact") {
        fs.readFile('contact-me.html', (err, file) => {
            if (err) throw err;
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            return res.end(file);
        })
    } else {
        fs.readFile('404.html', (err, file) => {
            if (err) throw err;
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            return res.end(file);
        })
    }
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})