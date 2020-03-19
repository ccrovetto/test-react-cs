import React from 'react';
import { Button } from 'reactstrap';

class CounterItem extends React.Component {
  render() {
    const { data, disabled, onDecrease, onIncrease, onRemove } = this.props;

    return (
      <div>
        <td>{data.title}</td>
        <td>{data.count}</td>
        <td><Button onClick={e => onDecrease(data.id)}>1-</Button></td>
        <td><Button disabled={disabled} onClick={e => onIncrease(data.id)}>1+</Button></td>
        <td><Button disabled={disabled} onClick={e => onRemove(data.id)}>Eliminar</Button></td>
      </div>
    );
  }
}

export default CounterItem;