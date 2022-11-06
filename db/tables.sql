DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS emp_role;
DROP TABLE IF EXISTS employee;

CREATE TABLE
    department (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        dpt_name VARCHAR(30) NOT NULL
    );
CREATE TABLE
    emp_role (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL(10, 2) NOT NULL,
        dpt_id INTEGER,
        CONSTRAINT fk_dpt FOREIGN KEY (dpt_id) REFERENCES department(id) ON DELETE SET NULL
    );
CREATE TABLE
    employee (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INTEGER,
        mgr_id INTEGER,
        CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES emp_role(id) ON DELETE SET NULL,
        CONSTRAINT fk_emp FOREIGN KEY (mgr_id) REFERENCES employee(id) ON DELETE SET NULL
    );