const mysql = require('mysql2/promise');

    let main = async () => {
        try{
            let connection = await mysql.createConnection({
                host: '127.0.0.1',
                user: 'root',
                password: '611997Stalindo',
                database: 'database_dia1'
            });
            console.log('Conexión establecida!');

            // HE INTENTADO CREAR EL ESPACIO DE TRABAJO A BASE DE CÓDIGO PERO ME DAN ERRORES QUE ME CALIENTAN
            // DEMASIADO LA CABEZA.

            // Crear las tablas que no tienen referencias externas primero
            // let sql3 = 'CREATE TABLE my_groups (group_id INT AUTO_INCREMENT PRIMARY KEY, ' +
            //                                 'name VARCHAR)';
            // let [result3] = await connection.query(sql3);
            // console.log('Nueva tabla creada!');
            // console.log(result3);

            // let sql4 = 'CREATE TABLE subjects (subject_id INT AUTO_INCREMENT PRIMARY KEY, ' +
            //                                   'title VARCHAR)';
            // let [result4] = await connection.query(sql4);
            // console.log('Nueva tabla creada!');
            // console.log(result4);

            // let sql6 = 'CREATE TABLE teachers (teacher_id INT AUTO_INCREMENT PRIMARY KEY, ' +
            //                                   'first_name VARCHAR, ' +
            //                                   'last_name VARCHAR)';
            // let [result6] = await connection.query(sql6);
            // console.log('Nueva tabla creada!');
            // console.log(result6);

            // // Luego, crear las tablas con referencias externas
            // let sql2 = 'CREATE TABLE students (student_id INT AUTO_INCREMENT PRIMARY KEY, ' +
            //                                   'first_name VARCHAR, ' +
            //                                   'last_name VARCHAR, ' +
            //                                   'group_id INT, ' +
            //                                   'FOREIGN KEY (group_id) REFERENCES my_groups(group_id))';
            // let [result2] = await connection.query(sql2);
            // console.log('Nueva tabla creada!');
            // console.log(result2);

            // let sql5 = 'CREATE TABLE subject_teacher (subject_teacher_id INT AUTO_INCREMENT PRIMARY KEY, ' +
            //                                          'subject_id INT, ' +
            //                                          'teacher_id INT, ' +
            //                                          'group_id INT, ' +
            //                                          'FOREIGN KEY (subject_id) REFERENCES subjects(subject_id), ' +
            //                                          'FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id), ' +
            //                                          'FOREIGN KEY (group_id) REFERENCES my_groups(group_id))';
            // let [result5] = await connection.query(sql5);
            // console.log('Nueva tabla creada!');
            // console.log(result5);

            // let sql1 = 'CREATE TABLE Marks (mark_id INT AUTO_INCREMENT PRIMARY KEY, ' +
            //                                'student_id INT, ' +
            //                                'subject_id INT, ' +
            //                                'date DATE, ' +
            //                                'mark INT, ' +
            //                                'FOREIGN KEY (student_id) REFERENCES students(student_id), ' +
            //                                'FOREIGN KEY (subject_id) REFERENCES subjects(subject_id))';
            // let [result1] = await connection.query(sql1);
            // console.log('Nueva tabla creada!');
            // console.log(result1);

            // let sql7 = 'CREATE TABLE Direction (direction_id INT AUTO_INCREMENT PRIMARY KEY, ' +
            //                                   'calle VARCHAR(100), ' +
            //                                   'numero INT, ' +
            //                                   'ciudad VARCHAR(50), ' +
            //                                   'pais VARCHAR(50))';
            // let [result7] = await connection.query(sql7);
            // console.log('Nueva tabla creada!');
            // console.log(result7);

            // let sqlInsert1 = 'INSERT INTO Grupos (name)' +
            //                 'VALUES ("Vikingos Coders")';
            // let [resultInsert1] = await connection.query(sqlInsert1);
            // console.log('Dirección insertada!');
            // console.log(resultInsert1);

            // let sqlInsert2 = 'INSERT INTO Grupos (name)' +
            //                  'VALUES ("Top Notch Coders")'
            // let [resultInsert2] = await connection.query(sqlInsert2);
            // console.log('Dirección insertada!');
            // console.log(resultInsert2);

            // let sqlInsert3 = 'INSERT INTO Grupos (name)' +
            //                  'VALUES ("ClickClickTeam")';
            // let [resultInsert3] = await connection.query(sqlInsert3);
            // console.log('Dirección insertada!');
            // console.log(resultInsert3);

            // let sqlInsert4 = 'INSERT INTO Grupos (name)' +
            //                  'VALUES ("CodersTeam")';
            // let [resultInsert4] = await connection.query(sqlInsert4);
            // console.log('Puntuació insertada!');
            // console.log(resultInsert4);

            // let sqlInsert5 = 'INSERT INTO Marks (date, mark)' +
            //                  'VALUES ("2018-01-01", 2)';
            // let [resultInsert5] = await connection.query(sqlInsert5);
            // console.log('Puntuació insertada');
            // console.log(resultInsert5);

            // // -----PARA BORRAR UNA COLUMNA. A TRAVÉS DE WORKBENCH HAS DE HACER CLICK DERECHO > DELETE SELECTED-----
            // let sqlInsert1 = 'ALTER TABLE Direction DROP COLUMN columna';
            // let [resultInsert1] = await connection.query(sqlInsert1);
            // console.log('Puntuació insertada');
            // console.log(resultInsert1);

            // // ------BORRA LA TABLA 'Direction'-------
            // let sqlInsert2 = 'DROP TABLE Direction';
            // let [resultInsert2] = await connection.query(sqlInsert2);
            // console.log('Puntuació insertada');
            // console.log(resultInsert2);

            // // ------MODIFICA LA NOTA DE LOS ESTUDIANTES--------
            // let sqlInsert3 = 'UPDATE Marks SET mark = 0';
            // let [resultInsert3] = await connection.query(sqlInsert3);
            // console.log('Puntuació insertada');
            // console.log(resultInsert3);

            // // ------NOS MUESTRA EL NOMBRE Y EL APELLIDO DE LOS ESTUDIANTES------
            // let sqlInsert4 = 'SELECT first_name, last_name FROM Students';
            // let [resultInsert4] = await connection.query(sqlInsert4);
            // console.log('Puntuació insertada');
            // console.log(resultInsert4);

            // // ------NOS MUESTRA TODA LA INFORMACIÓN DE LA TABLA------
            // let sqlInsert5 = 'SELECT * FROM Teachers';
            // let [resultInsert5] = await connection.query(sqlInsert5);
            // console.log('Puntuació insertada');
            // console.log(resultInsert5);

            // // -----ELIMINA DE LA BASE DE DATOS TODAS LAS NOTAS DE LOS ALUMNOS CUYA FECHA TENGA MÁS DE 10 AÑOS------
            // // -----NO FUNCIONA, ME HA BORRADO TODA LA INFORMACIÓN DE LA TABLA. FARFALLA VENDETTA!------
            // let sqlDelete = 'DELETE FROM Marks WHERE date < "2013-01-01"';
            // let [resultDelete] = await connection.query(sqlDelete);
            // console.log('Notas eliminadas');
            // console.log(resultDelete);

            // // ACTUALIZAR LAS NOTAS DE LOS ALUMNOS CUYA NOTA SEA INFERIOR A 5 A UN VALOR DE 5
            // let sqlUpdateMarks = 'UPDATE Marks SET mark = 5 WHERE mark < 5';
            // let [resultUpdateMarks] = await connection.query(sqlUpdateMarks);
            // console.log('Notas actualizadas');
            // console.log(resultUpdateMarks);

        }catch(error){
            console.error(error);
        }
}
main();