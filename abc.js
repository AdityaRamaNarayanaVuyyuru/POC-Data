

var { google } = require('googleapis')

//const {sampleClient} = require('../sampleclient');

var http=require('http');
var fs=require('fs');

//var server=http.createServer(function(req,res){

//res.writeHead(200,{'Content-Type':'text/html'});
  
 // var stream=fs.createReadStream(_dirname+'/abc.html','utf8');
  //stream.pipe(res);
var YOUR_CLIENT_ID='929004569091-pq3q5mve6nsmhg5lfu2vu5gq44acfp45.apps.googleusercontent.com';
var YOUR_CLIENT_SECRET='fpZsRhxOq4slRF0advdaT6ZS';
 var YOUR_REDIRECT_URL='http://localhost:80/abc.html';

var  oauth2Client= new google.auth.OAuth2(YOUR_CLIENT_ID,YOUR_CLIENT_SECRET,YOUR_REDIRECT_URL);
  

  var url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline'

  // If you only need one scope you can pass it as a string
  

  // Optional property that passes state parameters to redirect URI
  // state: { foo: 'bar' }
});

  oauth2Client.setCredentials({ refresh_token:`zPtp6l9nxyWEB0yyMs9KcUKblHvfBia7r9AtQtnzFrQ`})
console.log(oauth2Client);

//const analytics = google.analytics({
  //version: 'v3',
  //auth: sampleClient.oAuth2Client,
//});

//console.log(analytics);
 
 console.log('hello world');


 function validateRefreshToken(req,res,next){
 db.client.findUserOfToken(req.body,function(err,user){
 if(err){
 return next(err);
 }
 req.user=user;
 next();
 });
 }
 apps.post('/token',validateRefreshToken,generateAcessToken,function(req,res){
 res.status(201).json({token:req.token});});