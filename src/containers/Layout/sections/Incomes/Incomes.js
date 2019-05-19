import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
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
import moment from "moment";

class Incomes extends Component {
  state = {
    incomes: [],
    createModal: false,
    amount: 0,
    category: 1
  };

  getIncomes = () => {
    axios.get("/incomes?uid=PPtk6UoXaGW3IowzEpjrqxmZS2O2").then(response => {
      console.log(response);
      let incomes = response.data.map(income => {
        return {
          amount: income.amount,
          name: income.name,
          date: moment.unix(income.date).format("MM/DD/YYYY"),
          category: income.category.name,
          icon: income.category.icon
        };
      });
      this.setState({ incomes });
    });
  };

  createIncome = () => {
    this.setState({ createModal: true });
  };

  closeIncome = () => {
    this.setState({ createModal: false });
  };

  saveNewIncome = () => {
    let { name, amount, category, description } = this.state;
    let newIncome = {
      name,
      amount,
      category,
      description,
      uid: "PPtk6UoXaGW3IowzEpjrqxmZS2O2" // Will use `user.uid`
    };

    axios.post("/incomes", newIncome).then(result => {
      this.getIncomes();
      this.setState({
        createModal: false,
        name: "",
        amount: "",
        category: 1,
        description: ""
      });
    });
  };

  onFormChange = event => {
    let key = event.target.id;
    let newState = {};
    newState[key] = event.target.value;
    this.setState({ ...newState });
  };

  componentWillMount() {
    this.getIncomes();
  }

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
                    style={{ "margin-right": "5px" }}
                    onClick={this.createIncome}
                  >
                    <i className="fa fa-plus" />
                  </Button>
                  <Button className="btn-info" onClick={this.getIncomes}>
                    <i className="fa fa-refresh" />
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                {this.state.incomes.map(income => {
                  return (
                    <Income
                      header={"$" + income.amount}
                      mainText={income.name}
                      icon={income.icon != null ? income.icon : "fa fa-dollar"}
                      variant="1"
                      color="success"
                    />
                  );
                })}

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
          isOpen={this.state.createModal}
          toggle={this.closeIncome}
          className={"modal-success " + this.props.className}
        >
          <ModalHeader toggle={this.closeIncome}>Add a new Income</ModalHeader>
          <ModalBody>
            <Form onChange={this.onFormChange}>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Income name"
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
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="6">
                  <FormGroup>
                    <Label htmlFor="category">Category</Label>
                    <Input type="select" name="category" id="category">
                      <option value="1">1</option>
                      <option value="2">2</option>
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
                      value={this.state.amount}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.saveNewIncome}>
              Save
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

export default Incomes;
