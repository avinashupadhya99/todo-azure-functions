const sqlite3 = require('sqlite3').verbose();

exports.getAllTodos = () => {
    // Replace with absolute path incase this does not work
    let db = new sqlite3.Database('C:\\Users\\avina\\TestStuff\\Azure-functions\\Service\\db\\file.db');

    return new Promise((resolve, reject) => {
        // Prepare query
        let sql = `SELECT * FROM todos`;

        // Execute query
        db.all(sql, [], (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
};

exports.addTodo = (todo) => {
    // Replace with absolute path incase this does not work
    let db = new sqlite3.Database('C:\\Users\\avina\\TestStuff\\Azure-functions\\Service\\db\\file.db');

    return new Promise((resolve, reject) => {
        // Prepare query
        let sql = `INSERT INTO todos (todo, completed) VALUES ("${todo.name}", ${todo.completed})`;

        // Execute query
        db.run(sql, [], (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}