import React, {Component} from 'react';

export default class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valor: 5,
    };

    const nuevoNum = this.state.valor + 1;
  }
  render() {
    return (
      <div>
        <p>{this.state.valor}</p>
      </div>
    );
  }
}
