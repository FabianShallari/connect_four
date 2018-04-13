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

  getCells = () => this.state.cells;

  getFilledColumns = () => {
    return this.getCells().map(column => column.every(cell => cell !== 'gray'));
  }

  isColumnFull = columnIndex => {
    return this.getCells()[columnIndex].every(cell => cell !== 'gray')
  }

  checkDraw = () => {
    return this.getCells().every(column => column.every(cell => cell !== 'gray'));
  }

  checkWin = () => {
    return this._checkHorizontal() || this._checkVertical() || this._checkDiagonal();
  };
  
  _checkHorizontal = () => {
    return this._checkFourRepetitions(transposeMatrix(this.getCells()));
  }

  _checkVertical = () => {
    return this._checkFourRepetitions(this.getCells());
  }

  _checkDiagonal = () => {
    // check top-left => bottom-right diagonals
    return this._checkFourRepetitions(matrixDiagonals(this.getCells()))
    ||
    // check bottom-left => top-right diagonals
    this._checkFourRepetitions(matrixDiagonals(rotateMatrix(this.getCells())));
  }

  _checkFourRepetitions = matrix => {
    return matrixHasRepetitions(matrix, { numberOfRepetitions: 4, filter: ['gray']});
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