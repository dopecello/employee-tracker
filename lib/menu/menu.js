const inquirer = require("inquirer");

function mainMenu() {
  console.clear();
  console.log("Welcome to Employee Tracker v1!");
  console.log(".::MAIN MENU::.");
  inquirer
    .prompt([
      {
        type: "list",
        name: "menuSelect",
        message: "Please choose one of the following options:",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Manager",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Department",
          "Budget by Department",
          "Exit",
        ],
        default: "View All Employees",
      },
    ])
    .then(({ menuSelect }) => {
      switch (menuSelect) {
        case "View All Employees":
          console.clear();
          viewAllEmployeesMenu();
          break;
        case "Add Employees":
          console.clear();
          addEmployeesMenu();
          break;
        case "Update Employee Manager":
          console.clear();
          updateEmployeeManagerMenu();
          break;
        case "Update Employee Role":
          console.clear();
          updateEmployeeRoleMenu();
          break;
        case "View Roles":
          console.clear();
          viewRolesMenu();
          break;
        case "Add Role":
          console.clear();
          addRoleMenu();
          break;
        case "View All Departments":
          console.clear();
          viewAllDepartmentsMenu();
          break;
        case "Add Department":
          console.clear();
          addDepartmentMenu();
          break;
        case "Budget by Department":
          console.clear();
          budgetByDepartmentMenu();
          break;
        case "Exit":
          console.clear();
          exit();
          break;
      }
    });
}

function exit() {
  console.log("Shutting down... use 'npm start' to reboot");
}

module.exports = mainMenu();