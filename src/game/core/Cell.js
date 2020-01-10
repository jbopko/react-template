export class Point {
  constructor(props) {
    this.x = props.x;
    this.y = props.y;
  }

  getRow() { return this.x; }

  getCol() { return this.y; }
}
/**
 * Manage State for cells Here???
 */
class Cell {
  constructor(props) {
    this.state = {
      point: props.point,
      mark: props.mark,
      isDisabled: props.disabled ? props.disabled : false,
    };
  }

  getPoint() { return this.state.point; }

  getMark() { return this.state.mark; }

  getDisabled() { return this.state.isDisabled; }

  setPoint(point) { this.state.point = point; }

  setMark(mark) { this.state.mark = mark; }

  setDisabled(disabled) { this.state.isDisabled = disabled; }
  // onClick = (player) => {
  //   if (player && !this.isDisabled) {
  //     this.state = {
  //       mark : player.mark,
  //       isDisabled : true
  //     }
  //   } else {
  //     console.log('clearing cell')
  //     this.state.mark = null
  //     this.state.isDisabled = false
  //   }
  // }
} export default Cell;
