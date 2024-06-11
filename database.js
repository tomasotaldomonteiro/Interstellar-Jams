const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'KYSOK_KOLBASKi2901', 
    database: 'interstellar_jams' 
});

module.exports = connection;