const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 888;
const app = express();
let myData = {
    data1: 50,
    data2: 50
}

app.get('/api', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.json(myData);
});
app.post('/api/send', bodyParser.text(), (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    console.log(JSON.parse(req.body))
    myData = JSON.parse(req.body);
})
app.use(express.static('build'));
app.listen(port, () => {
    console.log('server started...')
})