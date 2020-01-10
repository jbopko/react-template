import React, {Component} from 'react';
class CellComponent extends Component {
  /**
   * this.props.value set by GameboardComponent - cells will contain null or players mark
   * this.props.disabled set by Game - depends on whose turn it is and the current
   * Game stateonClick={()=> this.props.onClick()}
   */
  render () { 
    return (<button 
        className='Game-cell' 
        disabled={this.props.disabled}
        onClick={this.props.onClick}>
        {this.props.value}
      </button>)
  }
}
export default CellComponent;