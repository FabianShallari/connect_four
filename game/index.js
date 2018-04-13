import Players from '../players';

export const GameStatus = {
  playing: 0,
  win: 1,
  draw: 2
}

export default class Game {
  
  constructor(columnsNumber = 7, rowsNumber = 6) {
    
    this.state = {
      currentPlayerId: 1,
      cells: this._initializeCells(columnsNumber, rowsNumber),
      status: GameStatus.playing,
    }
  }

  _initializeCells = (columnsNumber, rowsNumber) => {
    return Array.from(Array(columnsNumber), () => Array(rowsNumber).fill('gray'))
  };
  
  getFilledColumns = () => {
    return this.state.cells.map(column => column.every(cell => cell !== 'gray'));
  }

  isColumnFull = columnIndex => this.state.cells[columnIndex].every(cell => cell !== 'gray');

  checkDraw = () => this.state.cells.every(column => column.every(cell => cell !== 'gray'));

  checkWin = () => false;
  
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