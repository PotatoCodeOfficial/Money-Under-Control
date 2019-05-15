/**
 * ExpenseController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const moment = require("moment");

module.exports = {
  find: async (req, res) => {
    let expenses = await Expense.find({ is_deleted: false }).populate(
      "category"
    );
    res.ok(expenses);
  },
  findById: async (req, res) => {
    let id = req.param("id");
    try {
      let expense = await Expense.findOne({ id, is_deleted: false }).populate(
        "category"
      );
      res.ok({ expense });
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
      let expense = await Expense.create({
        name,
        description,
        amount,
        category,
        date,
        UID
      }).fetch();

      res.ok(expense);
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
      await Expense.update({ id }).set({ is_deleted: true });
      res.status(204);
      res.send({});
    } catch (error) {
      res.serverError(error);
    }
  },
  update: async (req, res) => {
    let id = req.param("id");
    let expense = req.param("expense");

    if (!id || !expense) {
      res.status(422);
      res.send({ error: "id and expense are required for updating." });
    }

    delete expense.is_deleted;
    delete expense.id;

    try {
      let updatedExpense = await Expense.updateOne({
        id,
        is_deleted: false
      }).set(expense);
      res.ok(updatedExpense || {});
    } catch (error) {
      res.status(422);
      res.send({ error: error.details });
    }
  }
};
