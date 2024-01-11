// pages/api/my-api-route.js

export default function handler(req, res) {
    // Set Secure Cookie
    res.setHeader('Set-Cookie', 'myCookie=myValue; Secure; Expires=Wed, 21 Oct 2024 07:28:00 GMT;');
  
    // Use Cache-Control instead of Expires
    res.setHeader('Cache-Control', 'max-age=3600'); // Cache content for 1 hour
  
    // Remove P3P header
    // res.setHeader('P3P', 'CP="..."');
  
    // Remove Pragma header
    // res.setHeader('Pragma', 'no-cache');
  
    // Use Content-Security-Policy instead of X-Frame-Options
    res.setHeader('Content-Security-Policy', 'frame-ancestors "self"');
  
    // Your API logic here
    res.status(200).json({ message: 'Hello World' });

    res.setHeader('Set-Cookie', 'myCookie=myValue; Secure; Expires=Wed, 21 Oct 2024 07:28:00 GMT;');

  }