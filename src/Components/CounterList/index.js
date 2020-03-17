import React from 'react';
import CounterFilter from '../CounterFilter'
import './style.scss';
import { Table, Button } from 'reactstrap';

class CounterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValue: '',
      filterRules: [{
        title: 'Nombre',
        value: 'title',
      },
      {
        title: 'Menores a',
        value: 'min',
      },
      {
        title: 'Mayores a',
        value: 'max',
      }],
      indexRule: 0,
    };
  }

  handleChange = e => {
    this.setState({ filterValue: e.target.value })
  }

  getTotalCounts = () => {
    let total = 0;
    this.getFilteredData().forEach(item => {
      total += item.count;
    });
    return total;
  }

  getFilteredData = () => {
    const { filterValue, filterRules, indexRule } = this.state;
    const { data } = this.props.countersState;
    const rule = filterRules[indexRule].value;

    if (rule === 'title') {
      return data.filter(item => item.title.indexOf(filterValue) >= 0);
    }

    if (rule === 'min' && parseInt(filterValue, 10)) {
      return data.filter(item => item.count < parseInt(filterValue, 10));
    }

    if (rule === 'max' && parseInt(filterValue, 10)) {
      return data.filter(item => item.count > parseInt(filterValue, 10));
    }

    return data;
  }

  render() {
    const { filterValue, filterRules, indexRule } = this.state;
    const {  countersState, onOrder, onDecrease, onIncrease, onRemove } = this.props;
    const { isLoading } = countersState;
    return (
      <div className="counter-list">
        <CounterFilter
          rules=""
          rule={filterRules[indexRule]}
          searchPhrase={filterValue}
          onChange={this.handleChange}
        />
        <button type="button" onClick={e => onOrder()}>Ordenar por nombre</button>
        <button type="button" onClick={e => onOrder('count')}>Ordenar por cantidad</button>
        <Table hover responsive>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Contadores</th>
              <th></th>
              <th>Acciones</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.getFilteredData().map(item => (
              <tr className="counter-list__item" key={item.id}>
                <td>{item.title}</td>
                <td>{item.count}</td>
                <td><Button color="warning" onClick={e => onDecrease(item.id)}>1-</Button></td>
                <td><Button color="success" onClick={e => onIncrease(item.id)}>1+</Button></td>
                <td><Button color="danger" onClick={e => onRemove(item.id)}>Eliminar</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h4 className="counter-list__total">Total {this.getTotalCounts()}</h4>
      </div>
    )
  }
}

export default CounterList;