const {storeData, loadData} = require("../util/objstore");
let employees = [];
const service = {};

service.postEmployee = async (req, res) => {
    employees.push(JSON.parse(JSON.stringify(req.query)));
    console.log('post emp');

}

service.getAllEmployees = async (req, res) => {
    return employees
}

service.getEmployee = async (req, res) => {
    return employees.filter(emp =>
        emp.number === req.query.number ||
        emp.firstName == req.query.firstName ||
        emp.lastName === req.query.lastName)

}

service.deleteEmployee = async (req, res) => {
    const delIndex = employees.findIndex(emp =>
        emp.number === req.query.number ||
        emp.firstName == req.query.firstName ||
        emp.lastName === req.query.lastName)
        employees.splice(delIndex, 1);
}


service.loadEmployees = async (req, res) => {
    employees = JSON.parse(JSON.parse(loadData(req.query.employeeFile?req.query.employeeFile:'my_employees')));
}

service.saveEmployees = async (req, res) => {
    storeData(JSON.stringify(employees), req.query.employeeFile?req.query.employeeFile:'my_employees');
}

module.exports = service;

