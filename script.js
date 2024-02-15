// Employee Object
function Employee(name, age, department, salary) {
    this.name = name;
    this.age = age;
    this.department = department;
    this.salary = salary;
}

// Calculate Average Salary
function calculateAverageSalary(employees) {
    let totalSalary = 0;
    for(let i = 0; i < employees.length; i++) {
        totalSalary += employees[i].salary;
    }
    return totalSalary / employees.length;
}

// Find Employees in a Department
function findEmployeesInDepartment(employees, department) {
    return employees.filter(employee => employee.department === department);
}

// Increase Salary for Employees
function increaseSalary(employees, percentage) {
    employees.forEach(employee => {
        employee.salary += employee.salary * (percentage / 100);
    });
}

// Sort Employees by Age
function sortEmployeesByAge(employees) {
    return employees.sort((a, b) => a.age - b.age);
}

// Test the functions
let employees = [
    new Employee('John', 30, 'Sales', 50000),
    new Employee('Jane', 25, 'Marketing', 60000),
    new Employee('Doe', 35, 'Sales', 70000)
];

console.log('Average Salary:', calculateAverageSalary(employees));
console.log('Employees in Sales:', findEmployeesInDepartment(employees, 'Sales'));
increaseSalary(employees, 10);
console.log('Employees after salary increase:', employees);
console.log('Employees sorted by age:', sortEmployeesByAge(employees));
