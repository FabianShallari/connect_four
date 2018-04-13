import { 
  matrixHasRepetitions,
  transposeMatrix, 
  createMatrix,
  rotateMatrix,
  matrixDiagonals,
 } from "./matrix_utils";

export const Players = {
  1: {
    name: 'Player 1',
    color: 'red',
  },
  2: {
    name: 'Player 2',
    color: 'yellow',
  }  
}

export const GameStatus = {
  playing: 0,
  win: 1,
  draw: 2
}

export default class GameLogic {
  
  constructor(columnsNumber = 7, rowsNumber = 6) {
    
    this.state = {
      currentPlayerId: 1,
      cells: createMatrix(columnsNumber, rowsNumber, 'gray'),
      status: GameStatus.playing,
    }
  }

  getFilledColumns = () => {
    return this.state.cells.map(column => column.every(cell => cell !== 'gray'));
  }

  isColumnFull = columnIndex => this.state.cells[columnIndex].every(cell => cell !== 'gray');

  checkDraw = () => this.state.cells.every(column => column.every(cell => cell !== 'gray'));

  checkWin = () => {
    return this._checkHorizontal() || this._checkVertical() || this._checkDiagonal();
  };
  
  _checkHorizontal = () => {
    const { cells } = this.state;

    return matrixHasRepetitions(transposeMatrix(cells), { numberOfRepetitions: 4, filter: ['gray'] });
  }

  _checkVertical = () => {
    const { cells } = this.state;

    return matrixHasRepetitions(cells, { numberOfRepetitions: 4, filter: ['gray'] });
  }

  _checkDiagonal = () => {
    const { cells } = this.state;
    
    // check top-left => bottom-right diagonals
    return matrixHasRepetitions(matrixDiagonals(cells), { numberOfRepetitions: 4, filter: ['gray'] })
    ||
    // check bottom-left => top-right diagonals
    matrixHasRepetitions(matrixDiagonals(rotateMatrix(cells)), { numberOfRepetitions: 4, filter: ['gray'] });
  }
  
  playNextTurn = columnIndex => {
    const { currentPlayerId } = this.state;
    const currentPlayer = Players[currentPlayerId];

    // push disc (player.color) in the column 
    const column = this.state.cells[columnIndex];
    const lastEmptySlotIndex = column.lastIndexOf('gray');
    column[lastEmptySlotIndex] = currentPlayer.color;

    // check if win
    if (this.checkWin()) {
      this.state.status = GameStatus.win;
    } else if (this.checkDraw()) {
      // check if draw
      this.state.status = GameStatus.draw;
    } else {
      // keep playing, switch player
      this.state.currentPlayerId = currentPlayerId === 1 ? 2 : 1;
    }
  }
}