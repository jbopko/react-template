import React, { Component } from 'react';
import GameboardComponent from './GameboardComponent';
import PlayerComponent from './PlayerComponent';

import Gameboard from '../core/Gameboard';
import { Player, PlayerType } from '../core/Player';
import Move, { MovesButtonGroup } from '../core/Move';
import Minimax from '../core/Minimax';

// ffmpeg -f concat -safe 0 -i <(for f in ./*.MP4; do echo "file '$PWD/$f'"; done)
// -c copy chrysalis.mp4

/* <PlayerComponent player={player}
  onClickName ={ (evt) => {this.onClickName}}
  onClickMark={ (evt) => {this.onClickMark}}
  onClickMode={ (evt) => {this.onClickMode}}
  /> */

const Players = ({ players }) => (
  <div className="">
    <ol className="mtop mbottom mleft tleft">
      {
    players.map((player) => <li key={player.name}><PlayerComponent player={player} /></li>)
  }
    </ol>
  </div>
);
class Game extends Component {
  constructor(props) {
    super(props);
    const gameboard = new Gameboard(props.dimensions);
    const players = Player.initPlayers([{ name: 'Player', mark: 'X', mode: PlayerType.LOCAL }, { name: 'PyreSq', mark: 'O', mode: PlayerType.AI }]);

    this.state = {
      board: gameboard,
      players,
      status: GameStatus.OK,
      history: [],
      moves: [],
      step: 0,
      suggested: null,
      currentPlayer: null,
    };
  }

  render() {
    // eslint-disable-next-line
    const unused = 'this'
    const appSlice = 'App-section-slice col-one-third tcenter';
    const { status } = this.state;
    const isDisabled = !(this.state.players[0].mode === PlayerType.LOCAL);
    return (
      <div className="App-section">
        <div className={appSlice}>
          <Players players={this.state.players} onClickName={this.onClickName} />
        </div>
        <div className={appSlice}>
          <GameboardComponent
            board={this.state.board}
            players={this.state.players}
            disabled={isDisabled}
            onCellClick={this.onCellClick}
          />
        </div>
        <div className={appSlice}>
          <PauseButton onClick={this.onClickStart} value={GameStatus.props[status].code} />
          <MovesButtonGroup onClick={this.onClickRewind} moves={this.state.moves} />
        </div>
      </div>
    );
  }
  // onClickName = (evt) => {
  //   const newValue = evt.target.value
  //   console.log('victory ' + newValue)

  //   const newPlayers = players.map(element => {
  //     if (player.name === element.name) {
  //       element.setName(newValue)
  //     }
  //     return element
  //   })
  //   console.log(newPlayers)
  // }
  // onClickMark =(event) =>
  // {
  //   const mark = event.target.value
  //   this.setState({
  //     mark: mark})
  // }
  // onClickMode = (event) => {
  //   const modeSelected = event.target.value
  //   let mode = PlayerType.LOCAL
  //   if (modeSelected === PlayerType.props[PlayerType.AI].value) {
  //       mode = PlayerType.AI
  //   } else if (modeSelected === PlayerType.props[PlayerType.REMOTE].value) {
  //       mode = PlayerType.REMOTE
  //   }
  //   // update the games state with the new player info
  //   const players = this.state.players
  //   console.log (players)
  //   // which player is being updated?
  //   this.setState({mode: mode})
  // }
  // onClickStart = () => {
  //   const status = this.state.status
  //   if (status===GameStatus.DISABLED) {
  //     this.setState ({status:GameStatus.OK}, () => this.stateUpdated())
  //   } else if (status===GameStatus.OK || status===GameStatus.FULL) {
  //     this.setState ({status:GameStatus.DISABLED})
  //   }
  // }
  // onClickRewind = (gotoStep) => {
  //   const step = this.state.step
  //   if (step > gotoStep) {
  //     const players = this.state.players.slice()
  //     const history = this.state.history.slice(0,gotoStep)
  //     const stepDelta = step - gotoStep
  //     const playerDelta = stepDelta % players.length
  //     for (let i=0; i < playerDelta; i++) {
  //       const lastPlayer = players.pop()
  //       players.unshift (lastPlayer)
  //     }
  //     const board = this.state.board
  //     if (gotoStep) {
  //       board.setCells(history[gotoStep-1])
  //     } else {
  //       board.start({rows:4, cols:4})
  //     }
  //     this.setState({
  //       players: players,
  //       history: history,
  //       moves: this.state.moves.slice(0,gotoStep),
  //       step: gotoStep,
  //       currentPlayer: players[0],
  //       status: GameStatus.DISABLED
  //     });
  //   }
  // }
  // handleNextMove = (players, delay) => {
  //   const board = this.state.board
  //   const CELL_LIMIT = 0;
  //   const move = this.state.moves[this.state.step-1]
  //   const mode = players[0].state.mode
  //   let nextMove = null
  //   setTimeout ( () => {
  //     const available = board.getAvailable()
  //     if (mode===PlayerType.LOCAL) {
  //       if (available.length <= CELL_LIMIT) {
  //         nextMove = Minimax.nextMove(board, move, players, true);
  //         if (nextMove) {
  //           setTimeout ( () => {this.setState({suggested: nextMove})}, delay)
  //           // start animation
  //         } else { console.log ('minimax returned invalid status')}
  //       }
  //     } else if (mode===PlayerType.AI) {
  //       // if there are too many cells, pick a random one
  //       if (available.length <= CELL_LIMIT) {
  //         nextMove = Minimax.nextMove(board, move, players, true);
  //       } else {nextMove = available[Math.floor(Math.random()*available.length)]}
  //       if (nextMove) {
  //         setTimeout ( () => {this.makeMove (board, nextMove)}, delay)
  //         // start animations here ...
  //       }
  //     }
  //   }, 100)  // fork a thread
  // }

  //   componentDidUpdate(prevProps, prevState, snapshot) {
  //     console.log('Game ComponentDidUpdate.')
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     console.log('Game derived state - ' + nextProps + prevState)
  //     return prevState
  // }
  updatePlayers(players) {
    this.setState(
      {
        players,
      },
    );
  }

  // onCellClick = (point) => {
  //   // We need to clone each array of the board (players too)
  //   // individually to prevent previous state being overwritten.
  //   // board = board.slice();
  //   // for (var i = 0; i < board.length; i++) {
  //   //   board[i] = board[i].slice()
  //   // }
  //   let status = this.state.status
  //   const players = this.state.players.slice()
  //   const player = players.shift()
  //   const move = new Move(point.x, point.y, player, 0)
  //   const board = this.state.board
  //   // make move
  //   if (status===GameStatus.OK ) {
  //     if (board.isAvailable(move)) {
  //       console.log ('cell isAvailable')
  //     }
  //     console.log ('makeMove in Game')
  //     board.play (move)
  //     // update game state
  //     const moves = this.state.moves
  //     const history = this.state.history
  //     const step = this.state.step
  //     const score = this.getScore (board)
  //     console.log(score)
  //     status = this.getStatus(board)
  //     players.push (player)
  //     moves.push (move)
  //     history.push (board.getCells())
  //     // save the new game state
  //     this.setState({
  //       players: players,
  //       status: status,
  //       history: history,
  //       moves: moves,
  //       step: step + 1,
  //       currentPlayer: players[0]
  //     }, () => {this.stateUpdated ()})
  //   }
  // }
  stateUpdated() {
    const { players } = this.state;
    const { board } = this.state;
    const move = this.state.moves[this.state.step - 1];
    const available = board.getAvailable();
    const { status } = this.state;
    console.log(`${move}, ${available}`);

    if (status === GameStatus.OK) {
      this.handleNextMove(players, 1000);
    } else if (status === GameStatus.TAKEN) {
      this.startNextGame(players, 2000);
    } else if (status === GameStatus.FULL) {
      this.startNextGame(players, 2000);
    }
  }

  // getStatus = (board) => {
  //   if (this.didWin(board.getCells(), board.getLast())) {return GameStatus.TAKEN;}
  //   if (board.hasAvailable()) { return GameStatus.OK }
  //   return GameStatus.FULL
  // }
  // getScore = (board) => {
  //   return 0
  // }
  startNextGame(players, delay) {
    const { board } = this.state;
    const cells = board.getCells();
    const dimensions = { rows: cells.length, cols: cells[0].length };
    board.start(dimensions);
    setTimeout(() => {
      this.setState({
        players,
        status: GameStatus.OK,
        history: [],
        moves: [],
        step: 0,
        suggested: null,
        currentPlayer: players[0],
      }, () => {
        this.handleNextMove(players, delay);
      });
    }, delay);
  }

  // victory (players, delay) {
  //   // put celebrations here
  // }
  componentDidMount() {
    // const board = this.state.board
    const { players } = this.state;
    const player = players[0];

    if (PlayerType.AI === player.mode) {
      this.startNextGame(players, 500);
    }
  }

  componentWillUnmount() {
  }

  // didWin = (gameboard, space) => {
  //   if (gameboard && space && space.row != null && space.col != null) {
  //     const cell = gameboard[space.col * 3 + space.row];
  //     const winlines = this.getWinlines(gameboard, space);
  //     const { length } = winlines;
  //     for (let line = 0; line < length; line++) {
  //       const myline = winlines[line];
  //       const { a } = myline;
  //       const { b } = myline;
  //       if (a && b) {
  //         const cellA = gameboard[a.row][a.col];
  //         const cellB = gameboard[b.row][b.col];
  //         if (cell && cell === cellA && cell === cellB) {
  //           return cell;
  //         }
  //       }
  //     }
  //   } else {
  //     alert(`invalid input... checking if last move was win:\n ${gameboard}\nMove values: ${space.row}${space.col}`);
  //   } // we don't have a space selection, board couldn't be taken
  // }

  /**
   * Retrieve an array of the winlines for a given coordinate
   * @param {[][]} spaces The grid of spaces making up the game
   * @param {row:int, col:int} cell The coordinates of the cell for which winlines will be calculated
   */
  //   getWinlines = (gameboard, cell) => {
  //     const threeInARow = [
  //       { a: { row: -1, col: -1 }, b: { row: 1, col: 1 } },
  //       { a: { row: -1, col: 1 }, b: { row: 1, col: -1 } },
  //       { a: { row: -1, col: 0 }, b: { row: 1, col: 0 } },
  //       { a: { row: 0, col: -1 }, b: { row: 0, col: 1 } },
  //       { a: { row: -1, col: -1 }, b: { row: -2, col: -2 } },
  //       { a: { row: 1, col: -1 }, b: { row: 2, col: -2 } },
  //       { a: { row: 1, col: 0 }, b: { row: 2, col: 0 } },
  //       { a: { row: 0, col: 1 }, b: { row: 0, col: 2 } },
  //       { a: { row: 1, col: 1 }, b: { row: 2, col: 2 } },
  //       { a: { row: -1, col: 1 }, b: { row: -2, col: 2 } },
  //       { a: { row: -1, col: 0 }, b: { row: -2, col: 0 } },
  //       { a: { row: 0, col: -1 }, b: { row: 0, col: -2 } },
  //     ];

//     if (gameboard != null && cell.row != null && cell.col != null) {
//       const rows = 3;
//       const cols = (rows != null) ? 3 : null;
//       if (rows > 0 && cols > 0) {
//         const winlines = threeInARow.map((value, index, array) => {
//           const arow = value.a.row + cell.row;
//           const acol = value.a.col + cell.col;
//           const brow = value.b.row + cell.row;
//           const bcol = value.b.col + cell.col;
//           return (
//             (arow >= 0 && arow < rows && acol >= 0 && acol < cols
//           && brow >= 0 && brow < rows && bcol >= 0 && bcol < cols)
//               ? { a: { row: arow, col: acol }, b: { row: brow, col: bcol } } : undefined
//           );
//         });
//         return winlines.clean(undefined);
//       }
//     }
//   }
}
export const GameStatus = {
  OK: 1,
  DISABLED: 2,
  FULL: 3,
  TAKEN: 4,
  ERROR: 5,
  props: {
    1: { name: 'Ready for next move', value: 1, code: 'Pause' },
    2: { name: 'Paused...', value: 2, code: 'Start Game' },
    3: { name: 'There are no available moves', value: 3, code: 'Board is Full' },
    4: { name: 'The Board is taken', value: 4, code: 'Winner!!!' },
    5: { name: 'An undefined state', value: 5, code: 'ERROR' },
  },
};
const PauseButton = (props) => {
  const { value } = props;
  const className = (value === GameStatus.props[GameStatus.OK].code) ? 'Game-button' : 'Game-button pulse-button';
  return (
    <button
      className={className}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};
// const Outcome = {
//   PENDING: 1,
//   FULL: 2,
//   TAKEN: 3,
//   props: {
//     1: {name: 'Ready', value: 1, code: 'OK'},
//     2: {name: 'The board is full', value: 2, code: 'FULL'},
//     3: {name: 'The board has been taken', value: 3, code: 'TAKEN'}
//   }
// };
// const Status = {
//   ACTIVE: 1,
//   IDLE: 2,
//   PAUSED: 3,
//   props: {
//     1: {name: 'Thinking...', value: 1, code: 'OK'},
//     2: {name: 'Idle', value: 2, code: 'Pause Game'},
//     3: {name: 'The game is paused', value: 3, code: 'Start Game'}
//   }
// };
export default Game;


// Listen, my children, and you shall hear
// Of the midnight ride of Paul Revere,
// On the eighteenth of April, in Seventy-Five:
// Hardly a man is now alive
// Who remembers that famous day and year.

// He said to his friend, “If the British march
// By land or sea from the town to-night,
// Hang a lantern aloft in the belfry-arch
// Of the North-Church-tower, as a signal-light,--
// One if by land, and two if by sea;
// And I on the opposite shore will be,
// Ready to ride and spread the alarm
// Through every Middlesex village and farm,
// For the country-folk to be up and to arm.”

// Then he said “Good night!” and with muffled oar
// Silently rowed to the Charlestown shore,
// Just as the moon rose over the bay,
// Where swinging wide at her moorings lay
// The Somerset, British man-of-war:
// A phantom ship, with each mast and spar
// Across the moon, like a prison-bar,
// And a huge black hulk, that was magnified
// By its own reflection in the tide.

// Meanwhile, his friend, through alley and street
// Wanders and watches with eager ears,
// Till in the silence around him he hears
// The muster of men at the barrack door,
// The sound of arms, and the tramp of feet,
// And the measured tread of the grenadiers
// Marching down to their boats on the shore.

// Then he climbed to the tower of the church,
// Up the wooden stairs, with stealthy tread,
// To the belfry-chamber overhead,
// And startled the pigeons from their perch
// On the sombre rafters, that round him made
// Masses and moving shapes of shade,--
// By the trembling ladder, steep and tall,
// To the highest window in the wall,
// Where he paused to listen and look down
// A moment on the roofs of the town,
// And the moonlight flowing over all.

// Beneath, in the churchyard, lay the dead,
// In their night-encampment on the hill,
// Wrapped in silence so deep and still
// That he could hear, like a sentinel’s tread,
// The watchful night-wind, as it went
// Creeping along from tent to tent,
// And seeming to whisper, “All is well!”
// A moment only he feels the spell
// Of the place and the hour, and the secret dread
// Of the lonely belfry and the dead;
// For suddenly all his thoughts are bent
// On a shadowy something far away,
// Where the river widens to meet the bay, --
// A line of black, that bends and floats
// On the rising tide, like a bridge of boats.

// Meanwhile, impatient to mount and ride,
// Booted and spurred, with a heavy stride,
// On the opposite shore walked Paul Revere.
// Now he patted his horse’s side,
// Now gazed on the landscape far and near,
// Then impetuous stamped the earth,
// And turned and tightened his saddle-girth;
// But mostly he watched with eager search
// The belfry-tower of the old North Church,
// As it rose above the graves on the hill,
// Lonely and spectral and sombre and still.
// And lo! as he looks, on the belfry’s height,
// A glimmer, and then a gleam of light!
// He springs to the saddle, the bridle he turns,
// But lingers and gazes, till full on his sight
// A second lamp in the belfry burns!

// A hurry of hoofs in a village-street,
// A shape in the moonlight, a bulk in the dark,
// And beneath from the pebbles, in passing, a spark
// Struck out by a steed that flies fearless and fleet:
// That was all! And yet, through the gloom and the light,
// The fate of a nation was riding that night;
// And the spark struck out by that steed, in his flight,
// Kindled the land into flame with its heat.

// He has left the village and mounted the steep,
// And beneath him, tranquil and broad and deep,
// Is the Mystic, meeting the ocean tides;
// And under the alders, that skirt its edge,
// Now soft on the sand, now loud on the ledge,
// Is heard the tramp of his steed as he rides.

// It was twelve by the village clock
// When he crossed the bridge into Medford town.
// He heard the crowing of the cock,
// And the barking of the farmer’s dog,
// And felt the damp of the river-fog,
// That rises when the sun goes down.

// It was one by the village clock,
// When he galloped into Lexington.
// He saw the gilded weathercock
// Swim in the moonlight as he passed,
// And the meeting-house windows, blank and bare,
// Gaze at him with a spectral glare,
// As if they already stood aghast
// At the bloody work they would look upon.

// It was two by the village clock,
// When be came to the bridge in Concord town.
// He heard the bleating of the flock,
// And the twitter of birds among the trees,
// And felt the breath of the morning breeze
// Blowing over the meadows brown.
// And one was safe and asleep in his bed
// Who at the bridge would be first to fall,
// Who that day would be lying dead,
// Pierced by a British musket-ball.

// You know the rest. In the books you have read,
// How the British Regulars fired and fled,--
// How the farmers gave them ball for ball,
// From behind each fence and farmyard-wall,
// Chasing the red-coats down the lane,
// Then crossing the fields to emerge again
// Under the trees at the turn of the road,
// And only pausing to fire and load.

// So through the night rode Paul Revere;
// And so through the night went his cry of alarm
// To every Middlesex village and farm,--
// A cry of defiance, and not of fear,
// A voice in the darkness, a knock at the door,
// And a word that shall echo forevermore!
// For, borne on the night-wind of the Past,
// Through all our history, to the last,
// In the hour of darkness and peril and need,
// The people will waken and listen to hear
// The hurrying hoof-beats of that steed,
// And the midnight message of Paul Revere.
