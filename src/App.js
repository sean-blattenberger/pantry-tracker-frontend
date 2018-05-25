import React, { Component } from "react";
import "./App.css";
import { Navbar, NavItem, Icon, Modal, Button, Row } from "react-materialize";
import FoodCard from "./components/FoodCard";
import FoodSubmit from "./components/FoodSubmit";
import baseURL from "./serverConnect";

class App extends Component {
  state = {
    food: []
  };



  addFoodItem = item => {
    // let newData = this.state.food.push(item);
    this.setState({ food: this.state.food.concat(item) });
    console.log(this.state.food);
    document.getElementById("modal").classList.toggle("open");
  };

    componentWillMount() {
        fetch(baseURL)
            .then(response => response.json())
            .then(food => this.setState({food}))
    };

  updateField = (item) => {
    this.setState({ food: this.state.food.concat(item) });
    console.log(this.state)
  }


  render() {
    console.log(this.state.food);
    return (
      <div className="App">
        <Navbar brand={<Icon className="white-text">fastfood</Icon>} right>
          <NavItem href="components.html">
            <Modal
              id="modal"
              header="Add your food"
              fixedFooter
              trigger={<Button>Add Item</Button>}
            >
              <FoodSubmit addFood={this.addFoodItem} />
            </Modal>
          </NavItem>
        </Navbar>
        <Row>
          {Object.keys(this.state.food).map((key) => {
            return <FoodCard
                key={key}
                update={this.updateField}
                food={this.state.food[key]} />;
          })}
        </Row>
      </div>
    );
  }
}

export default App;
