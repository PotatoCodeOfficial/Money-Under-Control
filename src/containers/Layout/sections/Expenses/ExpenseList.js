import React from "react";
import PropTypes from "prop-types";

const ExpenseList = ({ expenses }) => (
  <table className="table">
    <tbody>
      {expenses.map(expense => {
        return <tr>{expense.name}</tr>;
      })}
    </tbody>
  </table>
);

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired
};

export default ExpenseList;
