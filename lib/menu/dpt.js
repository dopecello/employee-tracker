const Dpt = require("../Dpt");
const db = require("../../db/connection");
const inquirer = require("inquirer");
const menu = require("./menu");

function viewAllDepartmentsMenu() {
  const dpt = new Dpt();
  dpt
    .getAll()
    .then((rows) => {
      console.log(".::All Departments::.");
      console.table(rows);
    })
    .then(() => manageDptMenu());
}

function manageDptMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "DptMenu",
        message: "What else would you like to do?",
        choices: [
          "Add a department",
          "View budgets by department",
          "Nothing, take me to the Main Menu",
        ],
      },
    ])
    .then(({ DptMenu }) => {
      switch (DptMenu) {
        case "Add a department":
          console.clear();
          addDptMenu();
          break;
        case "View budgets by department":
          console.clear();
          budgetByDeparmentMenu();
          break;
        case "Nothing, take me to the Main Menu":
          console.clear();
          menu.mainMenu();
          break;
      }
    });
}

function addDptMenu() {
  inquirer
    .prompt([
      {
        type: "text",
        name: "newDptName",
        message: "What is the name of the new department?",
        validate: (dptname) => {
          if (!dptname) {
            console.log("Please enter a department name!");
          }
          return true;
        },
      },
    ])
    .then(({ newDptName }) => {
      const dpt = new Dpt(null, newDptName);
      dpt.addDpt();
      console.clear();
      viewAllDepartmentsMenu();
      console.table("Added department \n")
    });
}

module.exports = { viewAllDepartmentsMenu, addDptMenu };
