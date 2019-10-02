class TicTacToe {
  constructor() {
    this._matrix = Array(3)
      .fill()
      .map(() => Array(3).fill(null));

    this._currentPlayerSymbol = true;
    this._counterTurn = 0;
  }

  getCurrentPlayerSymbol() {
    return this._currentPlayerSymbol ? 'x' : 'o';
  }

  nextTurn(rowIndex, columnIndex) {
    if (this._matrix[rowIndex][columnIndex] === null) {
      this._matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
      this._currentPlayerSymbol = !this._currentPlayerSymbol;
      this._counterTurn++;
    }
  }

  isFinished() {}

  getWinner() {
    if (
      this._matrix[0][0] + this._matrix[1][1] + this._matrix[2][2] === 'xxx' ||
      this._matrix[0][2] + this._matrix[1][1] + this._matrix[2][0] === 'xxx'
    ) {
      return 'x';
    }
    if (
      this._matrix[0][0] + this._matrix[1][1] + this._matrix[2][2] === 'ooo' ||
      this._matrix[0][2] + this._matrix[1][1] + this._matrix[2][0] === 'ooo'
    ) {
      return 'o';
    }
    for (let row = 0; row < 3; row++) {
      if (
        this._matrix[row][0] + this._matrix[row][1] + this._matrix[row][2] ===
        'xxx'
      ) {
        return 'x';
      }
      if (
        this._matrix[row][0] + this._matrix[row][1] + this._matrix[row][2] ===
        'ooo'
      ) {
        return 'o';
      }
    }
    for (let col = 0; col < 3; col++) {
      if (
        this._matrix[0][col] + this._matrix[1][col] + this._matrix[2][col] ===
        'xxx'
      ) {
        return 'x';
      }
      if (
        this._matrix[0][col] + this._matrix[1][col] + this._matrix[2][col] ===
        'ooo'
      ) {
        return 'o';
      }
    }

    return null;
  }

  noMoreTurns() {}

  isDraw() {
    return this._counterTurn === 9 && this.getWinner() === null;
  }

  getFieldValue(rowIndex, colIndex) {
    return this._matrix[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;

// let game;

// game = new TicTacToe();
// game.nextTurn(2, 2);
// console.log(game.isDraw());

// game.nextTurn(1, 2);
// console.log(game.isDraw());

// game.nextTurn(0, 0);
// console.log(game.isDraw());

// game.nextTurn(1, 0);
// console.log(game.isDraw());

// game.nextTurn(0, 1);
// console.log(game.isDraw());

// game.nextTurn(2, 2);
// console.log(game.isDraw());

// game.nextTurn(2, 0);
// console.log(game.isDraw());

// game.nextTurn(2, 0);
// console.log(game.isDraw());

// game.nextTurn(0, 0);
// console.log(game.isDraw());

// game.nextTurn(0, 1);
// console.log(game.isDraw());

// game.nextTurn(1, 2);
// console.log(game.isDraw());

// game.nextTurn(2, 0);
// console.log(game.isDraw());

// game.nextTurn(0, 1);
// console.log(game.isDraw());

// game.nextTurn(0, 0);
// console.log(game.isDraw());

// game.nextTurn(2, 1);
// console.log(game.isDraw());

// game.nextTurn(2, 2);
// console.log(game.isDraw());

// game.nextTurn(2, 2);
// console.log(game.isDraw());

// game.nextTurn(0, 2);
// console.log(game.isDraw());

// game.nextTurn(1, 2);
// console.log(game.isDraw());

// game.nextTurn(1, 2);
// console.log(game.isDraw());

// game.nextTurn(0, 2);
// console.log(game.isDraw());

// game.nextTurn(1, 2);
// console.log(game.isDraw());

// game.nextTurn(2, 1);
// console.log(game.isDraw());

// game.nextTurn(2, 0);
// console.log(game.isDraw());

// game.nextTurn(0, 0);
// console.log(game.isDraw());

// game.nextTurn(1, 2);
// console.log(game.isDraw());

// game.nextTurn(0, 0);
// console.log(game.isDraw());

// game.nextTurn(1, 0);
// console.log(game.isDraw());

// game.nextTurn(0, 2);
// console.log(game.isDraw());

// game.nextTurn(2, 1);
// console.log(game.isDraw());

// game.nextTurn(0, 1);
// console.log(game.isDraw());

// game.nextTurn(0, 0);
// console.log(game.isDraw());

// game.nextTurn(2, 2);
// console.log(game.isDraw());

// game.nextTurn(0, 1);
// console.log(game.isDraw());

// game.nextTurn(0, 0);
// console.log(game.isDraw());

// game.nextTurn(2, 0);
// console.log(game.isDraw());

// game.nextTurn(1, 1);
// console.log(game.isDraw());
