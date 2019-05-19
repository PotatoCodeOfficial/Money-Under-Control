import React, { Component } from "react";
import { connect } from "react-redux";
import * as expenseActions from "../../../../redux/actions/expenseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import ExpenseList from "./ExpenseList";

class Expenses extends Component {
  componentDidMount() {
    console.log("Init Expenses");

    const { actions, expenses } = this.props;

    if (expenses.length === 0) {
      actions.loadExpenses().catch(error => {
        // TODO: Change error handling
        console.log("Error retrieving " + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2> Expenses </h2>
        <ExpenseList expenses={this.props.expenses} />
      </>
    );
  }
}

Expenses.propTypes = {
  expenses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    expenses: state.expenses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(expenseActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expenses);
