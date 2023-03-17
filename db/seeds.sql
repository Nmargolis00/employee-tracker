INSERT INTO department (name)
VALUES ("Engineering"),
    ("Sales"),
    ("Finance"),
    ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Mech. Engineer", 100000, 1),
    ("Engineering Manager", 180000, 1),
    ("Sr. Mech. Engineer", 150000, 1),
    ("Sales Person", 80000, 2),
    ("Sales Manager", 120000, 2),
    ("Sr. Sales Person", 100000, 2),
    ("Accountant", 80000, 3),
    ("Accounting Manager", 100000, 3),
    ("Sr. Accountant", 90000, 3),
    ("IP Coordinator", 60000, 4),
    ("Manager of IP", 90000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Billy", "Bob", 1, 2),
("Sarah", "Pookems", 2, null),
("Barbara", "Streisan", 3, 2),
("Joe", "Jenkins", 4, 5),
("Tim", "Bucktwo", 5, null),
("Jill", "Jalopy", 6, 5),
("Ben", "Benigans", 7, 8),
("Jim", "Tim", 8, null),
("Hugh", "Jackson", 9, 8),
("Karly", "Killington", 10, 11),
("Dilly", "Pickleface", 11, null);