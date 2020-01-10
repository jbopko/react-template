import GameboardComponent from '../components/GameboardComponent';
class Minimax {
    static nextMove (board, lastMove, players, isMaximizing){
        board = board.slice()
        players = players.slice()
        let moves = []
        let optim = {score: isMaximizing ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER}
        let bestMove = {score: isMaximizing ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER}
        let size = 0
        // We need to clone each array of the board individually
        // to prevent previous state being overwritten.    
        for (let i = 0; i < board.length; i++) {
          board[i] = board[i].slice()
          size = size + board[i].length
          for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === null) {
              moves.push({row:i, col:j})
            }
          }
        }
        if (lastMove != null && lastMove != null) {
          // If the game is over, return the score
          if (GameboardComponent.isGameboardTaken(board, lastMove)){
            const depth = size * moves.length/2
            const score = (depth + Math.pow(size,2))*(isMaximizing ? -1 : 1)
            return {score:score}
          } else if (moves.length===0) {return {score:0};}
        }
        // update the players' and alpha-beta numbers' arrays
        const player = players.shift()
        players.push(player);
        // Process available moves recursively, results are chained and iterated
        moves.map ((move, index) => {
          let result = null
          if (Minimax.getCached (board)) {} // not yet implemented
          else {
            move.player = player
            board[move.row][move.col] = player.mark;
            result = this.nextMove(board,move,players,!isMaximizing)
            board[move.row][move.col] = null;
          }
          return {
            score: parseInt(result.score,10),
            row: move.row,
            col: move.col,
            player: player}
        }).forEach ( (move, index, array) => {
          let score = move.score
          let adj = this.getScore(board, move, player)
          if (isMaximizing) {
            if ( (score + adj) > optim.score) {
              optim.score = score + adj
              bestMove.row=move.row
              bestMove.col=move.col
              bestMove.score = score
            }
          } else {
            if ( (score - adj) < optim.score) {
              optim.score = score - adj
              bestMove.row=move.row
              bestMove.col=move.col
              bestMove.score = score
            }
          }
        })
        return bestMove;
    }
    static getCached (cells) {
        // TODO: implement caching by board fingerprint for minimax algorithm
        return false
    }
    static getScore (board, cell, player) {
        const winlines = GameboardComponent.getWinlines(board, cell)
        const winlineCount = winlines.length
        let blocks = 0;
        let aggressive = 0;
        let defensive = 0;
        winlines.forEach ((line, index, lines) => {
          // load the winline siblings
          const siblingA = board[line.a.row][line.a.col]
          const siblingB = board[line.b.row][line.b.col]
          // look for blocks
          if (siblingA != null && siblingB!=null && siblingA === siblingB && player.mark !== siblingA) {
            blocks = blocks + 5
          }
          // look for potential win
          if ((siblingA == null || siblingB == null) && (siblingA === player.mark || siblingB === player.mark)) {
            // agression heuristic
            aggressive = aggressive + 2
          }
          // look for defensive selections
          if ((siblingA == null || siblingB == null) && (siblingA !== player.mark || siblingB !== player.mark)) {
            // defensive heuristic
            defensive = defensive + 1
          }
        })
        return false? winlineCount : blocks + winlineCount + aggressive + defensive
    }
    static getWinlineCount (board, cell) {
        const winlines = GameboardComponent.getWinlines(board, cell);
        let advantage = winlines.length
        return advantage
    }
} export default Minimax
  /**
   * Game Engine begins here
   */
  // miniMax = (board, lastMove, players, isMaximizing) => {
  //   board = board.slice()
  //   players = players.slice()
  //   let moves = []
  //   let optim = {score: isMaximizing ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER}
  //   let bestMove = {score: isMaximizing ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER}
  //   let size = 0
  //   // We need to clone each array of the board individually
  //   // to prevent previous state being overwritten.    
  //   for (let i = 0; i < board.length; i++) {
  //     board[i] = board[i].slice()
  //     size = size + board[i].length
  //     for (let j = 0; j < board[i].length; j++) {
  //       if (board[i][j] === null) {
  //         moves.push({x:i, y:j})
  //       }
  //     }
  //   }
  //   if (lastMove != null && lastMove != null) {
  //     // If the game is over, return the score
  //     if (GameboardComponent.isGameboardTaken(board, lastMove)){
  //       const depth = size * moves.length/2
  //       const score = (depth + Math.pow(size,2))*(isMaximizing ? -1 : 1)
  //       return {score:score}
  //     } else if (moves.length===0) {return {score:0};}
  //   }
  //   // update the players' and alpha-beta numbers' arrays
  //   const player = players.shift()
  //   players.push(player);
  //   // Process available moves recursively, results are chained and iterated
  //   moves.map ((move, index) => {
  //     let result = null
  //     if (this.getCached (board)) {} // not yet implemented
  //     else {
  //       move.player = player
  //       board[move.x][move.y] = player.mark;
  //       result = this.miniMax(board,move,players,!isMaximizing)
  //       board[move.x][move.y] = null;
  //     }
  //     return {
  //       score: parseInt(result.score,10),
  //       x: move.x,
  //       y: move.y,
  //       player: player}
  //   }).forEach ( (move, index, array) => {
  //     let score = move.score
  //     let adj = this.getScore(board, move, player)
  //     if (isMaximizing) {
  //       if ( (score + adj) > optim.score) {
  //         optim.score = score + adj
  //         bestMove.x=move.x
  //         bestMove.y=move.y
  //         bestMove.score = score
  //       }
  //     } else {
  //       if ( (score - adj) < optim.score) {
  //         optim.score = score - adj
  //         bestMove.x=move.x
  //         bestMove.y=move.y
  //         bestMove.score = score
  //       }
  //     }
  //   })
  //   return bestMove;
  // }
  // getCached (cells) {
  //   // TODO: implement caching by board fingerprint for minimax algorithm
  //   return false
  // }
  // getScore (board, cell, player) {
  //   const winlines = GameboardComponent.getWinlines(board, cell)
  //   const winlineCount = winlines.length
  //   let blocks = 0;
  //   let aggressive = 0;
  //   let defensive = 0;
  //   winlines.forEach ((line, index, lines) => {
  //     // load the winline siblings
  //     const siblingA = board[line.a.x][line.a.y]
  //     const siblingB = board[line.b.x][line.b.y]
  //     // look for blocks
  //     if (siblingA != null && siblingB!=null && siblingA === siblingB && player.mark !== siblingA) {
  //       blocks = blocks + 5
  //     }
  //     // look for potential win
  //     if ((siblingA == null || siblingB == null) && (siblingA === player.mark || siblingB === player.mark)) {
  //       // agression heuristic
  //       aggressive = aggressive + 2
  //     }
  //     // look for defensive selections
  //     if ((siblingA == null || siblingB == null) && (siblingA !== player.mark || siblingB !== player.mark)) {
  //       // defensive heuristic
  //       defensive = defensive + 1
  //     }
  //   })
  //   return false? winlineCount : blocks + winlineCount + aggressive + defensive
  // }
  // getWinlineCount (board, cell) {
  //   const winlines = GameboardComponent.getWinlines(board, cell);
  //   let advantage = winlines.length
  //   return advantage
  // }
