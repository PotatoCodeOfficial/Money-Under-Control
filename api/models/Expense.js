/**
 * Expense.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    UID: { type: "string", required: true },
    name: { type: "string", required: true },
    description: { type: "string" },
    amount: { type: "number", required: true },
    date: { type: "number", required: true }, // Using number in order to save Unix Time Stamp
    category: { model: "category", required: true },
    is_deleted: {
      type: "boolean",
      defaultsTo: false,
      allowNull: false
    }
  }
};

