const express = require('express');
const port = 888;
const app = express();
const myData = {
    data1: 23,
    data2: 25
}

app.get('/api', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.json(myData);
})
app.use(express.static('build'));
app.listen(port, () => {
    console.log('server started...')
})