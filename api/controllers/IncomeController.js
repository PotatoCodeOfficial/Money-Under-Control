/**
 * IncomeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  find: async (req, res) => {
    let incomes = await Income.find();
    res.ok(incomes);
  },
  create: async (req, res) => {
    let name = req.param("name");
    let amount = req.param("amount");
    let income = await Income.create({ name, amount }).fetch();
    res.ok(income);
  }
};
