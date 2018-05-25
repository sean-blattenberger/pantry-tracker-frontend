import React, { Component } from "react";
import "./App.css";
import { Navbar, NavItem, Icon, Modal, Button, Row } from "react-materialize";
import FoodCard from "./components/FoodCard";
import FoodSubmit from "./components/FoodSubmit";
const foodData = [
  {
    name: "Carrots",
    location: "refrigerator",
    amount: 2
  },
  {
    name: "Fruit Snacks",
    location: "panty",
    amount: 15
  },
  {
    name: "Potato Chips",
    location: "panty",
    amount: 2
  },
  {
    name: "Canned Beans",
    location: "panty",
    amount: 4
  },
  {
    name: "Milk",
    location: "refrigerator",
    amount: 1
  },
  {
    name: "Chicken Breast",
    location: "refrigerator",
    amount: 8
  }
];

class App extends Component {
  state = {
    food: foodData
  };
  addFoodItem = item => {
    // let newData = this.state.food.push(item);
    this.setState({ food: this.state.food.concat(item) });
    console.log(this.state.food);
    document.getElementById("modal").classList.toggle("open");
  };
  updateField = (item) => {
    this.setState({ food: this.state.food.concat(item) });
  }
  render() {
    console.log(this.state.food);
    return (
      <div className="App">
        <Navbar brand={<Icon className="white-text">fastfood</Icon>} right>
          <NavItem>Eatable Arrangrments</NavItem>
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
          {this.state.food.map((currFood, i) => {
            return <FoodCard index={i} update={this.updateField} food={currFood} />;
          })}
        </Row>
      </div>
    );
  }
}

export default App;
