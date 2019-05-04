/**
 * Category.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: { type: "string", columnType: "varchar (27)", required: true },
    type: { type: "string", columnType: "varchar (10)", required: true }, // income | expense
    icon: {
      type: "string",
      columnType: "varchar (20)",
      required: false
    },
    is_deleted: {
      type: "boolean",
      defaultsTo: false,
      allowNull: false
    }
  }
};
