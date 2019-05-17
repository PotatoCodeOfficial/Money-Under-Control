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
  // Incomes
  "get /api/incomes": "IncomeController.find",
  "get /api/incomes/:id?": "IncomeController.findById",
  "post /api/incomes": "IncomeController.create",
  "put /api/incomes/:id?": "IncomeController.update",
  "patch /api/incomes/:id?": "IncomeController.update",
  "delete /api/incomes/:id?": "IncomeController.deleteById",

  // Expenses
  "get /api/expenses": "ExpenseController.find",
  "get /api/expenses/:id?": "ExpenseController.findById",
  "post /api/expenses": "ExpenseController.create",
  "put /api/expenses/:id?": "ExpenseController.update",
  "patch /api/expenses/:id?": "ExpenseController.update",
  "delete /api/expenses/:id?": "ExpenseController.deleteById"
};
