var http = require('http');
var cookie = require('cookie');
http.createServer(function (req,res){
    var cookies = {};
    if(req.headers.cookie !== undefined){
        cookies = cookie.parse(req.headers.cookie);
    }
    // console.log(cookies);
    // console.log(cookies.yummy_cookie);
    res.writeHead(200, {
        'set-Cookie' : [
            'yummy_cookie=choco', 
            'tasty_cookie=strawberry', 
            `Permanent=cookies; Max-Age=${60*60*24*30}`,
            'Secure=Secure; Secure',
            'httpOnly=HttpOnly; HttpOnly',
            'Path=Path; Path=/cookie',
            'Doamin=Domain; Domain=02.0rg'
        ]
    });
    res.end('Cookie!!')
}).listen(3000);