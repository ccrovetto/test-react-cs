import React from 'react';
import { Input, Button, Form, FormGroup, Label } from 'reactstrap';

class CounterAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    const { title } = this.state;

     return (
      <Form action="#" onSubmit={this.handleSubmit}>
        <FormGroup>
          
        <Label htmlFor="title">Titulo</Label>
        <Input type="text" name="title" id="title" value={title} onChange={this.handleChange}  />
          <Button className="my-2" color="primary">Agregar</Button>
        </FormGroup>
          
      </Form>
    );
  }
}

export default CounterAddForm;