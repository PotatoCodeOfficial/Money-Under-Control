import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormGroup,
  Label,
  Input,
  Form
} from "reactstrap";
import Expense from "../../../../components/Expense/Expense";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  addExpense,
  getExpenses,
  openModal,
  closeModal,
  updateActualExpense,
  cleanActualExpense,
  setActualExpense,
  loadUserExpenses,
  saveExpense,
  deleteExpense
} from "../../../../redux/actions/expenseActions";
import { bindActionCreators } from "redux";
import MessageDialog from "../../../../helpers/Alerts";

class Expenses extends Component {
  loadExpenses = () => {
    this.props.loadUserExpenses();
  };

  createExpense = () => {
    this.props.openModal();
  };

  closeExpense = () => {
    this.props.closeModal();
    this.props.cleanActualExpense();
  };

  saveExpense = () => {
    this.props.saveExpense(this.props.actualExpense)
    MessageDialog("Success!!", "The expense was saved Successfully", "success");
  };

  deleteExpense = () => {
    this.props.deleteExpense(this.props.actualExpense.id);
    MessageDialog(
      "Deleted!!",
      "The expense was deleted Successfully",
      "success"
    );
  };

  componentDidMount() {
    this.loadExpenses();
  }

  handleFormChange = e => {

    let updatedExpense = {};
    updatedExpense[e.target.id] = e.target.value;
    this.props.updateActualExpense(updatedExpense);
  };

  openUpdateModal = e => {
    if (e.target.id.includes("edit-")) {
      let id = e.target.id.split("edit-")[1];
      let expense = this.props.expenses.filter(inc => {
        if (inc.id == id) return inc;
      })[0];
      this.props.setActualExpense(expense);
      this.props.openModal();
    }
  };

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-dollar" /> Expenses
                <div className="card-header-actions">
                  <Button
                    className="btn-success"
                    style={{ marginRight: "5px" }}
                    onClick={this.createExpense}
                  >
                    <i className="fa fa-plus" />
                  </Button>
                  <Button className="btn-info" onClick={this.loadExpenses}>
                    <i className="fa fa-refresh" />
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                {this.props.expenses.map((expense, idx) => {
                  return (
                    <Expense
                      key={idx}
                      header={"$" + expense.amount}
                      mainText={expense.name}
                      icon={expense.icon != null ? expense.icon : "fa fa-dollar"}
                      variant="1"
                      identifier={expense.id}
                      color="warning"
                      onClick={this.openUpdateModal}
                    />
                  );
                })}
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Modal
          isOpen={this.props.createModalStatus.open}
          toggle={this.closeExpense}
          className={"modal-warning " + this.props.className}
        >
          <ModalHeader toggle={this.closeExpense}>Add a new Expense</ModalHeader>
          <ModalBody>
            <Form onChange={this.handleFormChange}>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Expense name"
                      defaultValue={this.props.actualExpense.name}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name">Description</Label>
                    <Input
                      type="text"
                      id="description"
                      placeholder="Expense Description"
                      defaultValue={this.props.actualExpense.description}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="6">
                  <FormGroup>
                    <Label htmlFor="category">Category</Label>
                    <Input
                      type="select"
                      name="category"
                      id="category"
                      defaultValue={this.props.actualExpense.category_name}
                    >
                      {this.props.expenseCategories.map((category, idx) => {
                        return (
                          <option key={idx} value={category.id}>{category.name}</option>
                        );
                      })}
                    </Input>
                  </FormGroup>
                </Col>
                <Col xs="6">
                  <FormGroup>
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      type="number"
                      id="amount"
                      placeholder="1000"
                      defaultValue={this.props.actualExpense.amount}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter>
            {this.props.actualExpense.id == null ? null : (
              <Button color="danger" onClick={this.deleteExpense}>
                Delete
              </Button>
            )}
            <Button color="success" onClick={this.saveExpense}>
              {this.props.actualExpense.id == null ? "Save" : "Update"}
            </Button>
            <Button color="secondary" onClick={this.closeExpense}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

Expenses.propTypes = {
  user: PropTypes.object,
  expenses: PropTypes.array,
  expenseCategories: PropTypes.array,
  actualExpense: PropTypes.object.isRequired,
  createModalStatus: PropTypes.object.isRequired,
  addExpense: PropTypes.func.isRequired,
  getExpenses: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  updateActualExpense: PropTypes.func.isRequired,
  cleanActualExpense: PropTypes.func.isRequired,
  setActualExpense: PropTypes.func.isRequired,
  loadUserExpenses: PropTypes.func.isRequired,
  saveExpense: PropTypes.func.isRequired,
  deleteExpense: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    expenses: state.expenses.expenses,
    expenseCategories: state.category.expenseCategories,
    actualExpense: state.expenses.actualExpense,
    createModalStatus: state.expenses.createModalStatus
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addExpense: addExpense,
      getExpenses: getExpenses,
      openModal: openModal,
      closeModal: closeModal,
      updateActualExpense: updateActualExpense,
      cleanActualExpense: cleanActualExpense,
      setActualExpense: setActualExpense,
      loadUserExpenses: loadUserExpenses,
      saveExpense: saveExpense,
      deleteExpense: deleteExpense
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expenses);
