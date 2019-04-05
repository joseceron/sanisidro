const ftp = require('./ftp.js')
var easydate = require('easydate')


var fileName = easydate('Y')+easydate('M')+easydate('d')
// var fileName = '20190402'
// console.log(fileName)

ftp(fileName, (error, msg) => {
    if (error) {//return stop function execution
        return console.log(error)
    }        
    console.log('Mensaje: '+msg)
})

