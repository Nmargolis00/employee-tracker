const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');
const table = require('console.table');
const queries = require('./db/queries');
require('dotenv').config();


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: process.env.MYSQL_PW,
    database: 'workplace_db',
  },
  console.log(`Connected to the workplace_db database.`)
);

//Initial Prompts

async function startProgram() {
   inquirer.prompt([
        {type: 'list',
         name: 'selectionChosen',
         message: 'Please select from the following options',
         choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Update employee managers", "View employees by manager", "View employees by department", "Delete an employee", "Delete a department", "Delete a role", "View total utilized budget of a department", "Exit Program"],
        },
    ])
    .then((userChoice) => {
        let choice = userChoice.selectionChosen
        switch (choice) {
            case "View all departments":
                viewDepartments();
                break;
            case "View all Roles":
                viewRoles();
                break;
            case "View all employees":
                viewEmployees();
                break;
            case "Add a department":
                addDept();
                break;
            case "Add a role":
                addRole();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Update an employee role":
                updateEmployee();
                break;
            case "Update employee managers":
                updateManager();
                break;
            case "View employees by manager":
                managerEmployees();
                break;
            case "Delete an employee":
                deleteEmployee();
                break;
            case "Delete a department":
                deleteDept();
                break;
            case "Delete a role":
                deleteRole();
                break;
            case "View the total utilized budget of a department":
                deptBudget();
                break;
            case "Exit Program":
                process.exitProgram();
        };
    })
    
};

// Functions to View Department
function viewDepartments() {
    db.query(`SELECT * FROM department`, function (err, res) {
       (err) ? console.log(err) : console.table(res), startProgram(); 
    });
}

//Function to View Roles
function viewRoles() {
    db.query(`SELECT role.title, role.id, role.salary, department.department_name FROM role JOIN department ON role.department_id = department.id`, function (err, res) {
       (err) ? console.log(err) : console.table(res), startProgram(); 
    });
}

//Function to View Employees
function viewEmployees() {
    db.query(`SELECT employee.id, employee.first_name, employee.last_name FROM employee JOIN role ON role.id = employee.role.id`, function (err, res) {
       (err) ? console.log(err) : console.table(res), startProgram(); 
    });
}

// Function to add department
function addDept() {
    inquirer.prompt([{
        type: 'input',
        name: 'newDept',
        message: "Please enter the new department"
    }])
    .then((response) => {
        console.log("Department Added!"  + response.newDept);
        let deptName = response.newDept;
        db.query(`INSERT INTO department (name) VALUES ("${deptName}")`, function (err, res) {
            (err) ? console.log(err) : console.table(`Added ${deptName}`, res), viewDepartments(); 
            startProgram();
        })
    });   
}

// Function to add department
function addRole() {
    inquirer.prompt([{
        type: 'input',
        name: 'newRole',
        message: "Please enter the new department"
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Please enter the new role salary'
    },
    {
        type: 'input',
        name: 'DeptID',
        message: 'Please enter the department ID'
    }
])
    .then((response) => {
        console.log("New Role Added!"  + response.newDept);
        let newRole = response.newRole;
        db.query(`INSERT INTO role (title) VALUES ("${newRole}")`, function (err, res) {
            (err) ? console.log(err) : console.table(`Added ${deptName}`, res), viewRoles(); 
            startProgram();
        })
    });   
}


startProgram();

//Successful Connection
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });