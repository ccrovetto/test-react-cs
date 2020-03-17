import React from '../../../node_modules/react';
import { connect } from '../../../node_modules/react-redux';
import { Jumbotron, Row, Col } from 'reactstrap';
import {
  getCounters,
  addCounter,
  removeCounter,
  setCounter,
  setOrder
} from '../../store/actions/counters';
import CounterAddForm from '../../components/AddCounter';
import CounterList from '../../components/CounterList';
import './style.scss';

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.props.dispatch(getCounters());

    this.handleAddCounter = this.handleAddCounter.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleOrderBy = this.handleOrderBy.bind(this);
  }

  handleAddCounter(title) {
    this.props.dispatch(addCounter(title));
  }

  handleIncrease(id) {
    this.props.dispatch(setCounter(id, 'increase'))
  }

  handleDecrease(id) {
    this.props.dispatch(setCounter(id, 'decrease'))
  }

  handleRemove(id) {
    this.props.dispatch(removeCounter(id))
  }

  handleOrderBy(type = 'title') {
    this.props.dispatch(setOrder(type))
  }

  render() {
    const { counters } = this.props;

    return (
      <div className="body">
        <Jumbotron >
        <h1 className="display-3">Bienvenido a CounterTest!</h1>
        <p className="lead">Este es un test de contadores para cornershop</p>
        <hr className="my-2" />
        <Row>
        <Col xs="6">
        <CounterAddForm onSubmit={this.handleAddCounter} />
        </Col>
        <Col xs="6">
        <CounterList
          countersState={counters}
          onOrder={this.handleOrderBy}
          onDecrease={this.handleDecrease}
          onIncrease={this.handleIncrease}
          onRemove={this.handleRemove} />
        </Col>
      </Row>
        
        
      
      </Jumbotron>
      </div>
        
    );
  }
}

const mapStateToProps = state => ({
  counters: state.counters,
});

export default connect(mapStateToProps)(Body);