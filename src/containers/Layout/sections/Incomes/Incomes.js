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
import Income from "../../../../components/Income/Income";
import axios from "axios";
// import moment from "moment";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  addIncome,
  getIncomes,
  openModal,
  closeModal,
  updateActualIncome,
  cleanActualIncome,
  setActualIncome,
  loadUserIncomes
} from "../../../../redux/actions/incomeActions";

import { bindActionCreators } from "redux";

class Incomes extends Component {
  loadIncomes = () => {
    this.props.loadUserIncomes();
  };

  createIncome = () => {
    this.props.openModal();
  };

  closeIncome = () => {
    this.props.closeModal();
    this.props.cleanActualIncome();
  };

  saveIncome = () => {
    let newIncome = {
      ...this.props.actualIncome,
      uid: this.props.user.uid
    };

    if (this.props.actualIncome.id != null) {
      axios
        .put("/incomes/" + this.props.actualIncome.id, newIncome)
        .then(result => {
          this.loadIncomes();
          this.props.cleanActualIncome();
          this.props.closeModal();
        });
    } else {
      axios.post("/incomes", newIncome).then(result => {
        newIncome.id = result.data.id;
        this.props.addIncome(newIncome);
        this.props.cleanActualIncome();
        this.props.closeModal();
      });
    }
  };

  deleteIncome = () => {
    axios.delete("/incomes/" + this.props.actualIncome.id).then(result => {
      this.loadIncomes();
      this.props.cleanActualIncome();
      this.props.closeModal();
    });
  };

  componentWillMount() {
    this.loadIncomes();
  }

  handleFormChange = e => {
    let updatedIncome = {};
    updatedIncome[e.target.id] = e.target.value;
    this.props.updateActualIncome(updatedIncome);
  };

  openUpdateModal = e => {
    if (e.target.id.includes("edit-")) {
      let id = e.target.id.split("edit-")[1];
      let income = this.props.incomes.filter(inc => {
        if (inc.id == id) return inc;
      })[0];
      this.props.setActualIncome(income);
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
                <i className="fa fa-dollar" /> Incomes
                <div className="card-header-actions">
                  <Button
                    className="btn-success"
                    style={{ marginRight: "5px" }}
                    onClick={this.createIncome}
                  >
                    <i className="fa fa-plus" />
                  </Button>
                  <Button className="btn-info" onClick={this.loadIncomes}>
                    <i className="fa fa-refresh" />
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                {this.props.incomes.map((income, idx) => {
                  return (
                    <Income
                      key={idx}
                      header={"$" + income.amount}
                      mainText={income.name}
                      icon={income.icon != null ? income.icon : "fa fa-dollar"}
                      variant="1"
                      identifier={income.id}
                      color="success"
                      onClick={this.openUpdateModal}
                    />
                  );
                })}
                {/* Important TODO */}
                {/* <Pagination>
                  <PaginationItem disabled>
                    <PaginationLink previous tag="button">
                      Prev
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button">
                      Next
                    </PaginationLink>
                  </PaginationItem>
                </Pagination> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Modal
          isOpen={this.props.createModalStatus.open}
          toggle={this.closeIncome}
          className={"modal-success " + this.props.className}
        >
          <ModalHeader toggle={this.closeIncome}>Add a new Income</ModalHeader>
          <ModalBody>
            <Form onChange={this.handleFormChange}>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Income name"
                      value={this.props.actualIncome.name}
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
                      placeholder="Income Description"
                      value={this.props.actualIncome.description}
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
                      value={this.props.actualIncome.category_name}
                    >
                      {this.props.incomeCategories.map(category => {
                        return (
                          <option value={category.id}>{category.name}</option>
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
                      value={this.props.actualIncome.amount}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter>
            {this.props.actualIncome.id == null ? null : (
              <Button color="danger" onClick={this.deleteIncome}>
                Delete
              </Button>
            )}
            <Button color="success" onClick={this.saveIncome}>
              {this.props.actualIncome.id == null ? "Save" : "Update"}
            </Button>
            <Button color="secondary" onClick={this.closeIncome}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

Incomes.propTypes = {
  user: PropTypes.object,
  incomes: PropTypes.array,
  incomeCategories: PropTypes.array,
  actualIncome: PropTypes.object.isRequired,
  createModalStatus: PropTypes.object.isRequired,
  addIncome: PropTypes.func.isRequired,
  getIncomes: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  updateActualIncome: PropTypes.func.isRequired,
  cleanActualIncome: PropTypes.func.isRequired,
  setActualIncome: PropTypes.func.isRequired,
  loadUserIncomes: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    incomes: state.incomes.incomes,
    incomeCategories: state.category.incomeCategories,
    actualIncome: state.incomes.actualIncome,
    createModalStatus: state.incomes.createModalStatus
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addIncome: addIncome,
      getIncomes: getIncomes,
      openModal: openModal,
      closeModal: closeModal,
      updateActualIncome: updateActualIncome,
      cleanActualIncome: cleanActualIncome,
      setActualIncome: setActualIncome,
      loadUserIncomes: loadUserIncomes
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Incomes);
