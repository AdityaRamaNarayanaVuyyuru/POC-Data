var http = require('http');
var express = require('express');
var Session = require('express-session');
var google = require('googleapis');
//var plus = google.plus('v1');
//var OAuth2 = google.auth.OAuth2;
const ClientId = "-pq3q5mve6nsmhg5lfu2vu5gq44acfp45.apps.googleusercontent.com";
const ClientSecret = "fpZsRhxOq4slRF0advdaT6ZS";
const RedirectionUrl = "http://localhost:8081/oauthCallback";

var app = express();
app.use(Session({
    secret: 'raysources-secret-19890913007',
    resave: true,
    saveUninitialized: true
}));

function getOAuthClient() {
    return new google.auth.OAuth2(ClientId, ClientSecret, RedirectionUrl);
}

function getAuthUrl() {
    var oauth2Client = getOAuthClient();
    // generate a url that asks permissions for Google+ and Google Calendar scopes
    var scopes = [
        'https://www.googleapis.com/auth/plus.me'
    ];

    var url = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
        //use this below to force approval (will generate refresh_token)
        //approval_prompt : 'force'
    });

    return url;
}

app.use("/oauthCallback", function(req, res) {
    var oauth2Client = getOAuthClient();
    var session = req.session;
    var code = req.query.code;
    oauth2Client.getToken(code, function(err, tokens) {
        console.log("tokens : ", tokens);
        // Now tokens contains an access_token and an optional refresh_token. Save them.
        if (!err) {
            oauth2Client.setCredentials(tokens);
            session["tokens"] = tokens;
            res.send(`
                <html>
                <body>
                    <h3>Login successful!!</h3>
                    <a href="/details">Go to details page</a>
                <body>
                <html>
            `);
        } else {
            res.send(`
                <html>
                <body>
                    <h3>Login failed!!</h3>
                </body>
                </html>
            `);
        }
    });
});

app.use("/details", function(req, res) {
    var oauth2Client = getOAuthClient();
    oauth2Client.setCredentials(req.session["tokens"]);

    
});

app.use("/", function(req, res) {
    var url = getAuthUrl();
    res.send(`
        <html>
        <body>
<h1>Authentication using google oAuth</h1>
        <a href=${url}>Login</a>
        </body>
        </html>
    `)
});


var port = 80;
var server = http.createServer(app);
server.listen(port);
server.on('listening', function() {
    console.log(`listening to ${port}`);
});

