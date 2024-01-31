const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server Up and Running on Port ${port}`);
});
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/blog', (req, res) => {
    res.render('blog');
})


// This app.use should always be at the bottom
app.use((req, res) => {
    res.render('404');
})
