const inquirer = require("inquirer");
const { viewAllDepartmentsMenu, addDptMenu } = require("./dpt");

exports.mainMenu = mainMenu;

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
          "View All Departments",
          "Add Department",
          "Budget by Department",
          "View All Roles",
          "Add Role",
          "Update Employee Role",
          "View All Employees",
          "Add Employee",
          "Update Employee Manager",
          "Exit",
        ],
        default: "View All Employees",
      },
    ])
    .then(({ menuSelect }) => {
      switch (menuSelect) {
        case "View All Departments":
          console.clear();
          viewAllDepartmentsMenu();
          break;
        case "Add Department":
          console.clear();
          addDptMenu();
          break;
        case "Budget by Department":
          console.clear();
          budgetByDepartmentMenu();
          break;
        case "View All Roles":
          console.clear();
          viewAllRolesMenu();
          break;
        case "Add Role":
          console.clear();
          addRoleMenu();
          break;
        case "Update Role":
          console.clear();
          updateRoleMenu();
          break;
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
        case "Exit":
          console.clear();
          exit();
          break;
      }
    });
}

function exit() {
  console.clear();
  console.log("Shutting down... hit ctrl + c and use 'npm start' to reboot");
}
