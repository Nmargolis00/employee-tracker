const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');
const table = require('console.table');
const queries = require('./db/queries');


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
    password: 'process.env.MYSQL_PW',
    database: 'workplace_db'
  },
  console.log(`Connected to the workplace_db database.`)
);

//Initial Prompts

async function startProgram() {
    const {selectionChosen} = await inquirer.prompt([
        {type: 'list',
         name: 'selectionChosen',
         message: 'Please select from the following options',
         choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Update employee managers", "View employees by manager", "View employees by department", "Delete an employee", "delete a department", "delete a role", "View total utilized budget of a department", "Exit Program"],
        },
    ]);
    await createTable(selectionChosen);
};

async function createTable(selectionChosen) {
    const programAction = new ProgramAction(db, inquirer);
    switch (selectionChosen) {
        case "View all departments":
            programAction.viewDepartments();
            break;
        case "View all Roles":
            await programAction.viewRoles();
            break;
        case "View all employees":
            await programAction.viewEmployees();
            break;
        case "Add a department":
            await programAction.addDept();
            break;
        case "Add a role":
            await programAction.addRole();
            break;
        case "Add an employee":
            await programAction.addEmployee();
            break;
        case "Update an employee role":
            await programAction.updateEmployee();
            break;
        case "Update employee managers":
            await programAction.updateManager();
            break;
        case "View employees by manager":
            await programAction.managerEmployees();
            break;
        case "Delete an employee":
            await programAction.deleteEmployee();
            break;
        case "Delete a department":
            await programAction.deleteDept();
            break;
        case "Delete a role":
            await programAction.deleteRole();
            break;
        case "View the total utilized budget of a department":
            await programAction.deptBudget();
            break;
        case "Exit Program":
            process.exitProgram();
    };
    await startProgram();
};

//Successful Connection
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });