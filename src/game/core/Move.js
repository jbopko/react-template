import React from 'react';
class Move {
    constructor(row, col, player, score, step){
        this.row = row
        this.col = col
        this.player = player
        this.score = score
        this.step = step
    }
    // logMove () {
    //     console.log(this.props.player  + 
    //         // ' working with: ' + this.props.board
    //         + ' selects: [' + this.row + ',' + this.col
    //         + '] - move score: ' + this.score 
    //         // + '.  This is the ' + this.step + ' move'
    //     )
    // }
}
export function MovesButtonGroup (props) {
    const moves = props.moves
    const classname = 'Move-list'
    if (!moves || moves.length===0) {
      return <div className={classname}><ol></ol></div>
    }
    const list_items = moves.map ( (move, step) => {
      if (step===0) {
        return 'Restart Game'
      } else {
        return move.player.key + ' takes [' + (move.row+1) + ',' + (move.col+1) + ']'
      }
    }).map ( (button_label, step) => {
      if (step===0) {
        return <button key={step} className='Game-button mbottom fright' onClick={() => props.onClick(step)}>{button_label}</button>
      } else {
        return (
          <li key={step}>
            <button className='Move-button' onClick={() => props.onClick(step)}>{button_label}</button>
          </li>)
      }
    })
    return <ol className={classname}>{list_items}</ol>;
  }
export default Move;