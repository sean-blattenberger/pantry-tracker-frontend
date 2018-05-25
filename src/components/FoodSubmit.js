import React from "react";
import { Row, Input, Button, Icon } from "react-materialize";

class FoodSubmit extends React.Component {

  submitFood = event => {
    event.preventDefault();
    let foodFormData = new FormData(this.refs.form);
    let data = {
      name: foodFormData.get("food"),
      amount: foodFormData.get("quantity"),
      location: foodFormData.get("type"),
    }
    this.props.addFood(data);
  };

  render() {
    return (
      <form ref="form" onSubmit={this.submitFood}>
        <Row>
          <Input s={6} name="food" label="Food" validate defaultValue="Food" />
        </Row>
        <Row>
          <Input s={6} name="quantity" label="Quantity" validate defaultValue="0" />
        </Row>
        <Row>
          <Input name="type" type="radio" value="Pantry" label="Pantry" />
          <Input
            name="type"
            type="radio"
            value="Refrigerator"
            label="Refrigerator"
          />
        </Row>
        <Row>
          <Button type="submit" waves="light">
            Add<Icon left>add</Icon>
          </Button>
        </Row>
      </form>
    );
  }
}

export default FoodSubmit;
