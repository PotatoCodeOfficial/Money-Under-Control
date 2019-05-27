import React, { Component } from "react";
import { connect } from "react-redux";
import { loadUserExpenses } from "../../../../redux/actions/expenseActions";
import PropTypes from "prop-types";
import ExpenseList from "./ExpenseList";

import { bindActionCreators } from "redux";

class Expenses extends Component {
  loadExpenses = () => {
    this.props.loadUserExpenses();
  };

  componentDidMount() {
    this.loadExpenses();
  }

  render() {
    return (
      <>
        <h2> Expenses </h2>
        {this.props.expenses.map(expense => {
          return <p>{expense.name}</p>;
        })}
      </>
    );
  }
}

Expenses.propTypes = {
  expenses: PropTypes.array,
  actions: PropTypes.object,
  loadUserExpenses: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    expenses: state.expenses.expenses
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loadUserExpenses: loadUserExpenses
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expenses);
