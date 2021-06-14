const inquirer = require("inquirer")
const mysql = require("mysql")
const consoleTable = require("console.table")

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "NewPassword",
    database: "employee_trackerDB"
});

connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as ID" + connection.threadID)
    startPrompt();
});

