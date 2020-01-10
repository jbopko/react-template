// import React from 'react';
// import Player from './Player'
// import Move from './Move'
import Cell from './Cell';
class Gameboard {
  constructor (dimensions) {
    if (!dimensions || dimensions == null) {
      dimensions = { rows:3, cols:3}
    }
    this.spaces = this.initGameboard (dimensions)
  }
  /**
   * @param {object{number,number}} dimensions
   */
  setCells (cells) {this.spaces = cells}
  getCells () {
    const cells = this.spaces.slice()
    return cells
  }
  getLast () {return this.last}
  /**
   * Optimize by managing the state of available spaces on the gameboard
   */
  isAvailable (target) {
    const index = target.col*3+target.row
    return (this.spaces[index] === null)}
  hasAvailable () {return (this.getAvailable().length > 0) ? true : false}
  getAvailable () {
    const available = []
    for (let i=0; i < this.spaces.length; i++) {
      this.spaces.forEach((space, index) => {
        if (space===null) {
          available.push ({index:index})
        }
      })
    }
    return available
  }
  play(move) {
    const playerMark = move.player.mark
    const index = 3 * move.row + move.col 
    this.spaces[index].setMark(playerMark)
    this.last = {row:move.row, col:move.col, player:{mark:playerMark}}
    return true
  }
  start (dimensions) {
    return this.initGameboard(dimensions)
  }
  initGameboard (dimensions) {
    const cells = []
    this.last = null
    for (let i = 0; i < dimensions.rows; i++) {
      for (let j = 0; j < dimensions.cols; j++) {
        cells.push(new Cell ({point:{x:i, y:j}, mark:null, disabled:false}))
      }
    }
    return cells
  }
} export default Gameboard;