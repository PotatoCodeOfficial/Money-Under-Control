/**
 * IncomeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  find: async (req, res) => {
    let incomes = await Income.find().populate("category");
    res.ok(incomes);
  },
  create: async (req, res) => {
    let name = req.param("name");
    let amount = req.param("amount");
    let category = req.param("category");
    let income = await Income.create({ name, amount, category }).fetch();
    res.ok(income);
  }
};
