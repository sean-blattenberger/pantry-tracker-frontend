import React from "react";
import { Card, Col, Button, Input} from "react-materialize";
import Row from "react-materialize/lib/Row";

class FoodCard extends React.Component {
  state = {
    food: this.props.food,
    editable: false
  }
  makeEditable = () => {
    this.setState({edtable: true})
  }
  handleChange = (event) => {
    console.log('changed!!!', { [event.target.name]: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  }
  submitChange = (event) => {
    this.props.update()
  }
  render() {
    return (
      <Col offset="m1" m={4} s={12}>
        <Card key={this.props.index} className='white' textClassName='black-text' title='Food Card' actions={[<Button key={this.props.index} className="red black-text" href='/delete'>Delete Item</Button>, <Button key={this.props.index} onClick={this.makeEditable} className="black-text" href='/update'>Update Item</Button>]}>
          <form onSubmit={this.submitChange}>
            <Row>
              {this.state.editable ? <Input onChange={this.handleChange} value={this.state.food.name} defaultValue={this.state.food.name}></Input> : this.props.food.name}
            </Row>
            <Row>

              {this.state.editable ? <Input onChange={this.handleChange} value={this.state.food.amount} defaultValue={this.state.food.amount}></Input> : this.props.food.amount}
            </Row>
            <Row>
              {this.state.editable ? <Input value={this.state.food.location} defaultValue={this.state.food.location}></Input> : this.state.food.location}
            </Row>
            <Row>
              {this.state.editable ? <Button type="submit">Update Item</Button> : ''}
            </Row>
          </form>
        </Card>
      </Col>
    )
  }
}

export default FoodCard;