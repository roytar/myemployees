var express = require('express');
var router = express.Router();
var service = require('../services/employee');
var swaggerUi = require('swagger-ui-express');
var YAML = require('yamljs');


router.post('/', (req, res, next) => {
  service.postEmployee(req, res).then((response) => {
    res.status(204).json(response);
  }, (err) => {
    return next(err);
  });
});
router.get('/', (req, res, next) => {
  service.getEmployee(req, res).then((response) => {
    res.status(200).json(response);
  }, (err) => {
    return next(err);
  });
});
router.get('/all', (req, res, next) => {
  service.getAllEmployees(req, res).then((response) => {
    res.status(200).json(response);
  }, (err) => {
    return next(err);
  });
});
router.delete('/', (req, res, next) => {
  service.deleteEmployee(req, res).then((response) => {
    res.status(204).json(response);
  }, (err) => {
    return next(err);
  });
});
router.post('/saveEmployees', (req, res, next) => {
  service.saveEmployees(req, res).then((response) => {
    res.status(204).json(response);
  }, (err) => {
    return next(err);
  });
});
router.get('/loadEmployees', (req, res, next) => {
  service.loadEmployees(req, res).then((response) => {
    res.status(204).json(response);
  }, (err) => {
    return next(err);
  });
});

// const swaggerDocument = require('../doc/Employees.postman_collection.json');

if (!process.env.PRODUCTION) {
  const swaggerDocument = YAML.load('./doc/employees-openAPI.yaml');
  router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}



module.exports = router;
