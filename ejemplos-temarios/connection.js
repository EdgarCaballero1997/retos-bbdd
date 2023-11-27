// const mysql = require('mysql2/promise');

// let main = async () => {
//     try{
//         let connection = await mysql.createConnection({
//             host: '127.0.0.1',
//             user: 'root',
//             password: '611997Stalindo',
//             database: 'new_bbdd_practice'
//         });
//         console.log('Conexión establecida');
    
        // let sql = 'CREATE TABLE direction (id_direction INT AUTO_INCREMENT PRIMARY KEY, ' +
        //                                   'calle VARCHAR(200), ' +
        //                                   'numero INT, ' + 
        //                                   'ciudad VARCHAR(60))';

//         let sql = 'DROP TABLE direction';

//         let sql = 'INSERT INTO direction (calle, numero, ciudad)' + 
//                   'VALUES ("Mirador de Montepinar", 7, "Madrid")';

//         let sql = 'UPDATE usuario SET edad = 40';

//         let sql = 'SELECT nombre, apellido FROM usuario'

//         let sql = 'SELECT nombre, apellido, edad FROM usuario WHERE edad > 30'

//         let [result] = await connection.query(sql);

//         console.log('Uusario(s) seleccionado(s):');
//         console.log(result);

//     }catch(error){
//         console.error(error);
//         await connection.end();
//     }
// }
// main();