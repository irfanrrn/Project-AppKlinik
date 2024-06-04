// module.exports = {
//     multipleStatements  : true,
//     host                : 'localhost',
//     user                : 'root',
//     password            : '',
//     database            : 'klinik'
// };

let mysql = require('mysql');
 
let connection = mysql.createConnection({
   host:        'localhost',
   user:        'root',
   password:    '',
   database:    'klinik-app'
 });

connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Koneksi ke database MySql Berhasil!');
   }
 })

module.exports = connection;