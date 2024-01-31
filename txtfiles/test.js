const fs = require('fs');
const http = require('http');

const express = require('express')
const app = express()
const server = http.createServer((req, res) => {
    console.log("Server Up and Running !!!!");
    console.log(req.url, req.method);
    // fs.readFile('./views/index.html', (err, data) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         // console.log(data.toString());
    //         res.end(data.toString());
    //     }
    // });

    // res.write("It's working");
    // res.end()
    // res.write(req.url, req.method); //res.write meanns we are writing the response on our browser
    const path = './views/';
    switch (req.url) {
        case '/':
            res.statusCode = 200;
            fs.readFile('./views/index.html', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.end(data)
                }
            })
            break;
        case '/about':
            res.statusCode = 200;
            fs.readFile('./views/about.html', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.end(data)
                }
            })
            break;
        case '/contact':
            res.statusCode = 200;
            fs.readFile('./views/contact.html', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.end(data)
                }
            })
            break;
        case '/blog':
            res.statusCode = 200;
            fs.readFile('./views/blog.html', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.end(data)
                }
            })
            break;

        default:
            res.statusCode = 404;
            fs.readFile('./views/404.html', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.end(data)
                }
            })
            break;
    }
});



server.listen(3000, () => {
    console.log("Server Up and Running on Port 3000");
})

// app.get('/', (req, res) => {
//     res.send('GET request to the homepage')
// })


// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", function (req, res) {
//     res.send("Hello World!");
// });

// app.listen(port, function () {
//     console.log(`Example app listening on port ${port}!`);
// });