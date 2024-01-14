const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Middleware for parsing cookies
app.use(cookieParser());

// Route to set a cookie
app.get('/set-cookie', (req, res) => {
    // Set a cookie named 'exampleCookie'
    res.cookie('exampleCookie', 'cookieValue', {
        // Expires after 15 minutes from now
        expires: new Date(Date.now() + 900000),
        // The cookie is only sent over HTTPS
        secure: true,
        // Restricts the cookie from being sent in cross-site requests initiated by third-party websites
        sameSite: 'Lax',
        // You can also set 'sameSite' to 'None' if you want to allow cross-origin cookies
        // Note: 'None' should be used with 'secure: true' to ensure a secure context
    });

    // Send a response indicating that the cookie has been set
    res.send('Cookie has been set');
});

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
