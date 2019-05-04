/**
 * Income.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: { type: "string", required: true },
    amount: { type: "number", required: true },
    category: {
      model: "Category"
    }
  }
};
