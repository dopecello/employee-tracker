const Role = require("../Role");
const Dpt = require("../Dpt");
const inquirer = require("inquirer");
const menu = require("./menu");

function viewAllRolesMenu() {
  const role = new Role();
  role
    .getAll()
    .then((rows) => {
      console.log(".::All Roles::.");
      console.table(rows);
    })
    .then(() => manageRoleMenu());
}

function manageRoleMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "RoleMenu",
        message: "What else would you like to do?",
        choices: ["Add a role", "Nothing, take me to the Main Menu"],
      },
    ])
    .then(({ RoleMenu }) => {
      switch (RoleMenu) {
        case "Add a role":
          console.clear();
          addRoleMenu();
          break;
        case "Nothing, take me to the Main Menu":
          console.clear();
          menu.mainMenu();
          break;
      }
    });
}

function addRoleMenu() {
  const dpt = new Dpt();
  dpt.getAll().then((dpts) => {
    inquirer
      .prompt([
        {
          type: "text",
          name: "newRoleName",
          message: "What is the name of this new role?",
          validate: (rolename) => {
            if (!rolename) {
              console.log("Please enter a name for this role!");
            }
            return true;
          },
        },
        {
          type: "text",
          name: "roleSalary",
          message: "How much does this role make per year?",
          validate: (salary) => {
            if (!salary) {
              console.log("Please enter a yearly salary for this role!");
            }
            return true;
          },
        },
        {
          type: "list",
          name: "newRoleDpt",
          message: "What department does this role belong to?",
          choices: dpts.map((d) => {
            return `${d.id}--${d.dpt_name}`;
          }),
        },
      ])
      .then(({ newRoleName, roleSalary, newRoleDpt }) => {
        let truncatedId = newRoleDpt.charAt()
        const role = new Role(null, newRoleName, roleSalary, truncatedId);
        role.addRole();
        console.clear();
        viewAllRolesMenu();
        console.table("Added role \n");
      });
  });
}

module.exports = { viewAllRolesMenu, addRoleMenu };
