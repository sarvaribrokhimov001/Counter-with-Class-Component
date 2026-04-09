import { Component } from 'react';
import "../src/App.css";

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  reset = () => {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div className='container'>
        <h1 className='count__number'> {this.state.count} </h1>
        <div className='buttons'>
          <button className='decrement__btn' onClick={this.decrement}> - </button>
          <button className='increment__btn' onClick={this.increment}> + </button>
          <button className='reset__btn' onClick={this.reset}> Reset </button>
        </div>
      </div>
    )
  }
}