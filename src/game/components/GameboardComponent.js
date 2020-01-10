import React, { Component } from 'react';
import CellComponent from './CellComponent';
// import Move from '../core/Move';
class GameboardComponent extends Component {
  // row={cell.point.getRow()} col={cell.point.getCol()}
  // return the components with final styling for the board
  render() {
    const { board } = this.props;
    const { players } = this.props;

    const { spaces } = board;
    const player = players[0];

    console.log(`Rendering Gameboard Component... ${player.mark} will mark a space!`);

    return (
      <div className={this.props.disabled ? 'Game-board Game-board-taken' : 'Game-board'}>
        {
        spaces.map((cell, index, array) => {
          const { point } = cell.state;
          const key = `${point.x}-${point.y}`;
          //          const move = new Move(point.x, point.y, player, 0, -1)

          return (
            <CellComponent
              key={key}
              onClick={() => { this.onClickCell(cell); }}
              point={point}
              disabled={cell.state.isDisabled}
              value={cell.state.mark}
            />
          );
        })
      }

      </div>
    );
  }
  // onClickCell = (cell) => {
  //   const point = cell.state.point
  //   console.log('Gameboard detects cell Click! [' + point.x + ',' + point.y + ']')
  //   this.props.onCellClick(point)
  // }
} export default GameboardComponent;
// possibly: onClick ={ (evt) => {this.onClick}}
// dev: check isDisabled access vs getMark()


// class Gameboard extends Component {
//   render() {
//     const boardCells = this.props.cells;
//     const rows = boardCells.length;
//     const cols = boardCells[0].length;
//     let isDisabled = this.props.disabled;

//     // array of cells (a row)
//     let componentCells = Array(cols).fill(null);
//     // array of rows (the board)
//     let componentRows = Array(rows).fill(null);
//     for (let i = 0; i < rows; i++) {
//       for (let j = 0; j < cols; j++) {
//         let isCellDisabled=false
//         if(boardCells[i][j] != null) {
//           isCellDisabled = true
//           console.log('[' + i + ',' + j + '] should be disabled')
//         }
//         componentCells[j] = this.renderSquare(i, j, (isDisabled||isCellDisabled));
//       }
//       componentRows[i] = componentCells.slice();
//     }
//     // we need to apply some style (via a div and css className)
//     for (let k = 0; k < rows; k++) {
//       componentRows[k] = this.wrapRow(componentRows[k], k);
//     }
//     // return the components with final styling for the board
//     return (<div key={'gameGameboard'} className={isDisabled ? 'Game-board Game-board-taken' : 'Game-board'} >{componentRows}</div>);
//   }
//   wrapRow (componentRow, key) {
//     return (<div key={key} className='Game-row' >{componentRow}</div>);
//   }
//   renderSquare(row, col, isDisabled) {
//     const key = row.toString() + col.toString();
//     return (
//       '<div></div>'
//     )
//   }
// }
/* <div class="Game-board Game-board-taken">
<div class="Game-row"><button class="Game-cell" disabled=""></button><button class="Game-cell" disabled=""></button><button class="Game-cell" disabled=""></button><button class="Game-cell" disabled=""></button></div>
<div class="Game-row"><button class="Game-cell" disabled=""></button><button class="Game-cell" disabled="">X</button><button class="Game-cell" disabled=""></button><button class="Game-cell" disabled=""></button></div>
<div class="Game-row"><button class="Game-cell" disabled=""></button><button class="Game-cell" disabled=""></button><button class="Game-cell" disabled=""></button><button class="Game-cell" disabled=""></button></div>
<div class="Game-row"><button class="Game-cell" disabled=""></button><button class="Game-cell" disabled=""></button><button class="Game-cell" disabled="">O</button><button class="Game-cell" disabled=""></button></div>
</div> */


// var x = Array;
// x.prototype.clean = function(deleteValue) {
//   for (var i = 0; i < this.length; i++) {
//     if (this[i] === deleteValue) {
//       this.splice(i, 1);
//       i--;
//     }
//   }
//   return this;
// } export default Gameboard;
