/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  "get /incomes": "IncomeController.find",
  "get /incomes/:id?": "IncomeController.findById",
  "post /incomes": "IncomeController.create",
  "put /incomes/:id?": "IncomeController.update",
  "patch /incomes/:id?": "IncomeController.update",
  "delete /incomes/:id?": "IncomeController.deleteById"
};
