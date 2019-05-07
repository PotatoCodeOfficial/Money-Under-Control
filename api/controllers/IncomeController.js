/**
 * IncomeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const moment = require("moment");

module.exports = {
  find: async (req, res) => {
    let incomes = await Income.find({ is_deleted: false }).populate("category");
    res.ok(incomes);
  },
  findById: async (req, res) => {
    let id = req.param("id");
    try {
      let income = await Income.findOne({ id, is_deleted: false }).populate(
        "category"
      );
      res.ok({ income });
    } catch (error) {
      res.serverError(error);
    }
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
  },
  deleteById: async (req, res) => {
    let id = req.param("id");
    if (!id) {
      res.status(422);
      res.send({ error: "id is required for deleting." });
    }

    try {
      await Income.update({ id }).set({ is_deleted: true });
      res.status(204);
      res.send({});
    } catch (error) {
      res.serverError(error);
    }
  },
  update: async (req, res) => {
    let id = req.param("id");
    let income = req.param("income");

    if (!id || !income) {
      res.status(422);
      res.send({ error: "id and income are required for updating." });
    }

    delete income.is_deleted;
    delete income.id;

    try {
      let updatedIncome = await Income.updateOne({ id, is_deleted: false }).set(
        income
      );
      res.ok(updatedIncome || {});
    } catch (error) {
      res.status(422);
      res.send({ error: error.details });
    }
  }
};
