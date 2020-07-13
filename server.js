const express = require('express');
const port = process.env.PORT || 888;
const app = express();
const myData = {
    data1: 50,
    data2: 50
}

app.get('/api', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.json(myData);
})
app.use(express.static('build'));
app.listen(port, () => {
    console.log('server started...')
})