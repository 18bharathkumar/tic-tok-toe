import { useState } from "react";
export default function TBox() {
    const [boxs, setboxes] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
  
    function handleClick(i) {
      if (boxs[i] || calculateWin(boxs)) return;
      const nextboxes = boxs.slice();
      nextboxes[i] = isX ? "X" : "O";
      setboxes(nextboxes);
      setIsX(!isX);
    }
  
    const winner = calculateWin(boxs);
    let status;
    let winningBoxes = [];
  
    if (winner) {
      const Win = winner[0];
      status = boxs[Win] + " wins";
      winningBoxes = winner; // Store the winning combination
    } else if (boxs.every((square) => square !== null)) {
      status = "Draw game";
    } else {
      status = "It's " + (isX ? "X" : "O") + "'s turn";
    }
  
    function State({ status }) {
      return (
        <button className="w-52 h-10 bg-gray-200 text-xl font-bold border-2 border-gray-400 hover:bg-gray-300 rounded-md m-3">
          {status}
        </button>
      );
    }
  
    function onreset() {
      setboxes(Array(9).fill(null));
      setIsX(true);
    }
  
    return (
      <>
      <div>
        <div>
          <State status={status} />
          <div className="pl-3">
            <div className="flex ">
              <Box
                value={boxs[0]}
                onBoxClick={() => handleClick(0)}
                isWinning={winningBoxes.includes(0)}
              />
              <Box
                value={boxs[1]}
                onBoxClick={() => handleClick(1)}
                isWinning={winningBoxes.includes(1)}
              />
              <Box
                value={boxs[2]}
                onBoxClick={() => handleClick(2)}
                isWinning={winningBoxes.includes(2)}
              />
            </div>
            <div className="flex ">
              <Box
                value={boxs[3]}
                onBoxClick={() => handleClick(3)}
                isWinning={winningBoxes.includes(3)}
              />
              <Box
                value={boxs[4]}
                onBoxClick={() => handleClick(4)}
                isWinning={winningBoxes.includes(4)}
              />
              <Box
                value={boxs[5]}
                onBoxClick={() => handleClick(5)}
                isWinning={winningBoxes.includes(5)}
              />
            </div>
            <div className="flex ">
              <Box
                value={boxs[6]}
                onBoxClick={() => handleClick(6)}
                isWinning={winningBoxes.includes(6)}
              />
              <Box
                value={boxs[7]}
                onBoxClick={() => handleClick(7)}
                isWinning={winningBoxes.includes(7)}
              />
              <Box
                value={boxs[8]}
                onBoxClick={() => handleClick(8)}
                isWinning={winningBoxes.includes(8)}
              />
            </div>
          </div>
          <Reset onreset={onreset} />
        </div>
        </div>
      </>
    );
  }
  
  function Box({ value, onBoxClick, isWinning }) {
    return (
      <button
        className={`w-10 h-10 text-xl font-bold border-2 border-gray-400 hover:bg-gray-300 rounded-md m-3 ${
          isWinning ? "bg-green-400 hover:bg-green-500" : "bg-gray-200"
        }`}
        onClick={onBoxClick}
      >
        {value}
      </button>
    );
  }
  
  function calculateWin(boxs) {
    const winLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winLine.length; i++) {
      const [a, b, c] = winLine[i];
      if (boxs[a] && boxs[a] === boxs[b] && boxs[a] === boxs[c]) {
        return winLine[i]; // Return the winning combination
      }
    }
    return null; // No winner
  }
  
  function Reset({ onreset }) {
    return (
      <button
        className="w-52 h-10 bg-gray-200 text-xl font-bold border-2 border-gray-400 hover:bg-gray-300 rounded-md m-3"
        onClick={onreset}
      >
        New game
      </button>
    );
  }
  