// server.js
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
    res.cookie('exampleCookie', 'cookieValue', {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
        secure: true,
        sameSite: 'Lax',
    });

    res.send('Cookie has been set');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
