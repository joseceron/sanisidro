var fs = require('fs');
var FTPClient = require('ftp');
var c = new FTPClient();

const ftp = (fileName, callback) => {


c.connect({
  host: "ftp.chiaway.com",
  user: "nexolub@chiaway.com",
  password: "Soporteassisa",
  
})

c.on('ready', function() {
  console.log("Connected to datastore !")
  c.get( fileName + '.xls', function(err, stream) {
    if (err) {
        callback(err)
    }
    else {
    stream.once('close', function() { c.end(); })
    stream.pipe(fs.createWriteStream( fileName + '.xls'))
    callback('Archivo creado')
    }
  });
});

}
module.exports = ftp