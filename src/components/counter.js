import React, { Component } from 'react'

export class Counter extends Component {
    render() {
        return (
          <div>
            <div>
              Contador: <span>{this.state.contador}</span>
            </div>
    
            <button onClick={this.handleIncrement}>+</button>
            <button onClick={this.handleDecrement}>-</button>
          </div>
        )
      }
}
