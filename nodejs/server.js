const express = require("express");
const app = express();
const path =require('path')

let dir = path.join(__dirname, '../css')
let url = path.resolve(__dirname, '../css/Home.html')

/*let dir2 = path.join(__dirname, '../lab4')
app.use(express.static(dir))*/


app.use(express.static(dir));
const PORT =3000;

app.listen(PORT, () => {
    console.log(`starting..`);
});

app.get('/home',(req, res) => {
    res.sendFile(url)
});

app.get('/',(req, res) => {
    res.send('<h1>Test Page</h1>');
});