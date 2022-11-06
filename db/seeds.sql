-- department seeds
INSERT INTO department (dpt_name)
VALUES
    ('Accounting'),
    ('Marketing'),
    ('Sales'),
    ('Information Technology'),
    ('Human Resources');

-- role seeds
INSERT INTO emp_role (title, salary, dpt_id)
VALUES
  ('Sales Lead', '75000', 3),
  ('Sales Associate', '50000', 3),
  ('Tech Lead', '160000', 4),
  ('Junior Engineer', '70000', 4),
  ('Account Manager', '70000', 1),
  ('Accountant', '80000', 1),
  ('Payroll Specialist', '60000', 5),
  ('Marketing Strategist', '120000', 2),
  ('Graphic Designer', '60000', 2),
  ('HR Manager', '90000', 5);
    
-- employee seeds 
INSERT INTO employee (first_name, last_name, role_id, mgr_id)
VALUES
  ('Robert', 'Locke', 2, NULL),
  ('Kristina', 'Schaberg', 1, NULL),
  ('Bruce', 'Springer', 4, 2),
  ('Peter', 'Park', 2, 2),
  ('Derek', 'Chan', 3, 3),
  ('Paulina', 'Rios', 6, 3),
  ('Heather', 'Mealey', 8, 4),
  ('Sandy', 'Cheeks', 7, 3),
  ('Emily', 'Smith', 5, 2),
  ('Sarah', 'Danihel', 4, 4),
  ('Antonio', 'Sarmadi', 7, NULL),
  ('Samantha', 'Lytle', 4,2);