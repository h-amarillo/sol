const express = require('express');
const app = express();
const path = require ('path');
const port = 3000;

app.listen(port, () => console.log(`Servidor corriendo en el ${port}`));
app.use('/static', express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
});
