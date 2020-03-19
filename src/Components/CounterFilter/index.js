import React from 'react';
import { Input, Button, Form, FormGroup, Label } from 'reactstrap';

class CounterFilter extends React.Component {
  render() {
    const { filterValue, onChange, rule } = this.props;

    return (
      <div>
          <FormGroup>
            <Label htmlFor="filterValue">Buscar</Label>
            <Input className="md" type="text" name="filterValue" id="filterValue" value={filterValue} onChange={onChange}></Input>
          </FormGroup>
      </div>
    );
  }
}

export default CounterFilter;