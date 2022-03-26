const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html');
});

app.get('/about', (request, response) => {
    response.send('Hello, I am Kevin');
});

app.listen(3000, ()=>{
    console.log('server in running on port 3000.');
});
