// require deployd
var deployd = require('deployd');
var PORT=2404;
// configure database etc. 
var server = deployd({
 port: process.env.PORT || PORT,
 env: process.env.ENV || 'development',
 
db: { 
    connectionString: 'mongodb://localhost:27017/FEEDBIAS'
 }
});
 
console.log('Halo from feedbias');
// start the server
server.listen();

// debug
server.on('listening', function() {
  console.log("APAIBOT DPD Server is listening on port: " , PORT );
  
});

process.on('uncaughtException',function(err){
console.log('uncaughtException');
console.error(err);

});

// Deployd requires this
server.on('error', function(err) {
 console.error('Server.ON Error: ',err);
 process.nextTick(function() { // Give the server a chance to return an error
   process.exit();
 });
});