/**
 * IncomeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const moment = require("moment");

module.exports = {
  find: async (req, res) => {
    let incomes = await Income.find().populate("category");
    res.ok(incomes);
  },
  create: async (req, res) => {
    // Getting data from request
    let name = req.param("name");
    let UID = req.param("UID");
    let description = req.param("description");
    let amount = req.param("amount");
    let category = req.param("category");
    let date = req.param("date") || moment().unix();

    // Save or return 422
    try {
      let income = await Income.create({
        name,
        description,
        amount,
        category,
        date,
        UID
      }).fetch();

      res.ok(income);
    } catch (error) {
      res.status(422);
      res.send({ error: error.details });
    }
  }
};
