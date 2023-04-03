const query = {
//Shows department names and department IDs
    viewDepartments: `SELECT * FROM department`,
//Shows job title, role id, department role belongs to and salary for role
    viewRoles: `SELECT * FROM role LEFT JOIN department ON role.department_id = department.department_id`,
//Shows employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    viewEmployees: `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager.id`,
//Prompted to enter the name of the department and that department is added to the database
    addDept: (deptName) => `INSERT INTO department (department_name) VALUE ${deptName}`,
//Prompted to enter the name, salary, and department for the role and that role is added to the database
    addRole: (title, salary, department_id) => `INSERT INTO role (title, salary, department_id) VALUE "${title}", ${salary}, ${department_id}`,
//Prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
    addEmployee: (first_name, last_name, role_id, manager_id) => `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ${first_name}, ${last_name}, ${role_id}, ${manager_id}`,
//Prompted to select an employee to update and their new role and this information is updated in the database 
    updateEmployee: `UPDATE employee SET role_id WHERE id = empID`

// //EXTRA CREDIT

// //View Dept Budget
//     viewBudget: `SELECT department.id FROM department LEFT JOIN department ON role.department_id = department.department_id`
};

module.exports = query