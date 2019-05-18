import React, { Component } from "react";
import { connect } from "react-redux";
import * as expenseActions from "../../redux/actions/expenseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class ExpensesPage extends Component {
  componentDidMount() {
    const { actions, expenses } = this.props;
  }

  render() {
    return (
      <div>
        <h2> Expenses </h2>
        {expenses.map(expense => {
          <p>{expense.income}</p>;
        })}
      </div>
    );
  }
}

ExpensesPage.propTypes = {
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
    actions: bindActionCreators(expenseActions.loadExpenses, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpensesPage);
