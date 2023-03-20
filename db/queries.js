const queries = {
    viewDepartments: `SELECT * FROM department`,

    viewRoles: `SELECT role.title, role.id, role.salary, department.department_name FROM role JOIN department ON role.department_id = department.id`,

    //This one needs help
    viewEmployees: `SELECT employee.id, employee.first_name, employee.last_name FROM employee JOIN role ON role.id = employee.role.id`,

    addDept: (deptName) => `INSERT INTO department (department_name) VALUES ("${deptName}")`,

    addRole: (title, salary, department_id) => `INSERT INTO role (title, salary, department_id) VALUES ("${title}, ${salary}, ${department_id})`,

    addEmployee: (first_name, last_name, role_id, manager_id) => `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${first_name}, ${last_name}, ${role_id}, ${manager_id}")`,

    //Will have prompt with list of employees to select
    updateEmployee: 'ADD CODE',

    updateManager: 'ADD CODE',

    managerEmployees: 'ADD CODE',

    deleteEmployee: 'ADD CODE',

    deleteDept: 'ADD CODE',

    deleteRole: 'ADD CODE',

    deptBudget: 'ADD CODE',


};


module.exports = queries;