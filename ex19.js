/*In this exercise we will be writing an algorithm, to detect if two queens on a chess board can attack each other.

Queen Threat Detector
A game of chess is played on an 8 column by 8 row board. In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.

Chess Board Queen

In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays within an array). For this exercise, our chess board will have 2 queens, and nothing else. A 1 in the array represents a queen on the corresponding square, and a O in the array represents an unoccupied square.

So the following chess board:

chess board example

Would be represented in JavaScript like this:

[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
Our first challenge will be to write a function that generates a chess board like this. We will then write a function to detect weather or not the two queens are positioned so that they attack each other.

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
Expected Output
[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true

Input
let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
Expected Output
[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false

Instruction
Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.
*/

const rows = 8;
const cols = 8;

const generateBoard = (whiteQueen, blackQueen) => {
  const board = [];

  const setQueenPositions = () => {
    const rowNumber = board.length;
    if (rowNumber > rows - 1) {
      return;
    }

    const currRow = new Array(cols).fill(0);
    if (whiteQueen[0] == rowNumber) {
      currRow[whiteQueen[1]] = 1;
    }
    if (blackQueen[0] == rowNumber) {
      currRow[blackQueen[1]] = 1;
    }

    board.push(currRow);

    setQueenPositions();
  };

  setQueenPositions();

  return board;
};

const queenThreat = (board) => {
  // get both queen position in board
  const positions = board.reduce((target, row, rowIndex) => {
    if (row.includes(1)) {
      row.forEach((element, colIndex) => {
        if (element === 1) {
          target.push([rowIndex, colIndex]);
        }
      });
    }
    return target;
  }, []);

  const rowNumOfWhiteQueeen = positions[0][0];
  const rowNumOfBlackQueen = positions[1][0];
  const colNumOfWhiteQueeen = positions[0][1];
  const colNumOfBlackQueen = positions[1][1];

  // search column
  if (colNumOfWhiteQueeen === colNumOfBlackQueen) {
    return true;
  }

  // search row
  if (rowNumOfWhiteQueeen === rowNumOfBlackQueen) {
    return true;
  }

  // search diagonal
  // If we can create squarce from both positions, we consider each queen positions diagonal.
  return (
    Math.max(rowNumOfWhiteQueeen, rowNumOfBlackQueen) -
      Math.min(rowNumOfWhiteQueeen, rowNumOfBlackQueen) ===
    Math.max(colNumOfWhiteQueeen, colNumOfBlackQueen) -
      Math.min(colNumOfWhiteQueeen, colNumOfBlackQueen)
  );
};

// test case1 res: false
let whiteQueen = [0, 0];
let blackQueen = [5, 7];

// test case2 res: true
// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];

// test case3 res: true
// let whiteQueen = [3, 2];
// let blackQueen = [3, 6];

// test case4 res: true
// let whiteQueen = [1, 4];
// let blackQueen = [7, 4];

// test case5 res: true
// let whiteQueen = [2, 1];
// let blackQueen = [5, 4];

// test case6 res: true
// let whiteQueen = [6, 1];
// let blackQueen = [3, 4];

// test case7 res: false
// let whiteQueen = [2, 3];
// let blackQueen = [4, 6];

// test case8 res: true
// let whiteQueen = [0, 0];
// let blackQueen = [7, 7];

// test case9 res: true
// let whiteQueen = [4, 4];
// let blackQueen = [5, 5];

// test case10 res: false
// let whiteQueen = [2, 2];
// let blackQueen = [4, 3];

let generatedBoard = generateBoard(whiteQueen, blackQueen);

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
