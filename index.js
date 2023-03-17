const inquirer = require('inquirer');
const table = require('console.table');
const mysql2 = require('mysql2');

//Initial Prompts

async function startProgram() {
    const selections = await inquirer.prompt([
        {type: 'list',
         name: 'selectionChosen',
         message: 'Please select from the following options',
         choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Exit Program"],
        },
    ])
}