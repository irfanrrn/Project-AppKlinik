// module.exports = {
//     multipleStatements  : true,
//     host                : 'localhost',
//     user                : 'root',
//     password            : '',
//     database            : 'klinik-app'
// };

let mysql = require('mysql2');
 
let connection = mysql.createConnection({
   host:        'educalab.id',
   user:        '1Xu9qiSivEWUlAQ6',
   password:    'Wm0T0gxgDTtAyODS',
   database:    '1LIUp1PCfwXo6Of6',
   port: 3307
});

// let connection = mysql.createConnection({
//   host:        'localhost',
//   user:        'root',
//   password:    '',
//   database:    'klinik-app'
// });

connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Koneksi ke database MySql Berhasil!');
   }
 })

module.exports = connection;