var http                = require("http"),
    url                 = require("url"),
    nodemailer          = require('nodemailer'),
    server_port         = 3000,
    server_ip_address   = '127.0.0.1';

start();


function start() {

    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;

        request['setEncoding']("utf8");

        request.addListener("data", function (postDataChunk) {
            postData += postDataChunk;
        });

        request.addListener("end", function () {
            submitRequest(pathname, response, postData);
        });

    }

    var server = http.createServer(onRequest);
    server.listen(server_port, server_ip_address, function () {
        console.log("Listening on " + server_ip_address + ", server_port " + server_port)
    });
}

function submitRequest(pathname, response, postData) {
    if (!pathname || !response) {
        response['writeHead'](500, {'Content-Type': 'application/json', 'charset': 'utf-8'});
        response.write('Ошибка в запросе ' + pathname);
        response.end();
    } else {
        var path = pathname.replace(/\//g, ''),
            func = function (err, result) {
                var res = 0,
                    httpsc = 200;
                if (err) {
                    res = err;
                    httpsc = 500;
                } else {
                    if (result || result === 0) res = result;
                }

                response['writeHead'](httpsc, {'Content-Type': 'application/json', 'charset': 'utf-8'});
                response.write(JSON.stringify(res));
                response.end();
            };

        if (postData) postData = JSON.parse(postData);

        if (pathname === '/api/submit') {
            submitEmail(func, postData);
        } else {
            response['writeHead'](500, {'Content-Type': 'application/json', 'charset': 'utf-8'});
            response.write('Ошибка в запросе к БД ' + path);
            response.end();
        }
    }
}

function submitEmail(callback, data) {
// create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'Mail.ru',
        auth: {
            user: 'lordbuffer@mail.ru',
            pass: 'demonstrator'
        }
    });

// setup email data with unicode symbols
    var mailOptions = {
        from: 'lordbuffer@mail.ru', // sender address
        to: 'elaginds@gmail.com', // list of receivers
        subject: 'СООБЩЕНИЕ С TARTY.GA', // Subject line
        text: JSON.stringify(data), // plain text body
        html: JSON.stringify(data) // html body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {

        console.info('error, info - ',error, info);

        if (error) {
            callback(1, error)
        }else{
            callback(0, 'OK')
        }
        //console.log('Message %s sent: %s', info.messageId, info.response);
    });
}