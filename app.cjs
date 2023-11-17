const express = require('express');
const port = 3000;
const app = express();
const blog = { id: 1, title: "Blog title", description: "Blog description" };

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('index');
});

app.get('/about', (req,res) => {
    res.render('about');
});

app.get('/add', (req,res) => {
    res.render('add_post');
});

app.get('/post', (req,res) => {
    res.render('post');
});

app.listen(port, () => {
    console.log(`Uygulama ${port} Numaralı Portta Başladı!`);
});