const express = require('express');
const app = express();
const port = 8000;
const Vigenere = require('caesar-salad').Vigenere;

/// Task 1

app.get('/', (req, res) => {
    res.send('Hello!\n');
});


/// Task 2

app.get('/encode/:pass', (req, res) => {
    const encode = Vigenere.Cipher('password').crypt(req.params.pass);
    res.send(encode);
});


app.get('/decode/:pass', (req, res) => {
    const decode = Vigenere.Decipher('password').crypt(req.params.pass);
    res.send(decode)
});


app.listen(port, () => {
    console.log('We are live on ' + port);
});