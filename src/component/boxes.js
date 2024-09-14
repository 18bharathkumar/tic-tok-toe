import { useState } from "react";
export default function TBox() {
  const [isX, setIsX] = useState(true);
  const [box, setboxes] = useState(Array(9).fill(null));
  let winningBoxes = [];
  let status;
  
  const winner = calculateWin(box);
  if(winner){
    console.log(winner)
    const win = winner[0];
    status = box[win] + " wins";
    winningBoxes = winner;
  }
  else if(box.every((box)=>box!==null)){
    status = "its Draw "
  }
  else{
    status = "its "+(isX?'X':'O')+" turn"
  }
  function handleClick(i){
    if(box[i] || calculateWin(box))
        return
    let boxcopy = box.slice();
    boxcopy[i] = (isX?'X':'O');
    setboxes(boxcopy);
    setIsX(!isX);
  }
  function onreset(){
    setboxes(Array(9).fill(null));
    setIsX(true);
  }

  return (
    <>
    <div>
      <Status status={status} />
      <div className="flex">
        <Box
          value={box[0]}
          onBoxClick={() => {
            handleClick(0);
          }}
          isWinning={winningBoxes.includes(0)}
        />
         <Box
          value={box[1]}
          onBoxClick={() => {
            handleClick(1);
          }}
          isWinning={winningBoxes.includes(1)}
        />
         <Box
          value={box[2]}
          onBoxClick={() => {
            handleClick(2);
          }}
          isWinning={winningBoxes.includes(2)}
        />
      </div>
      <div className="flex">
        <Box
          value={box[3]}
          onBoxClick={() => {
            handleClick(3);
          }}
          isWinning={winningBoxes.includes(3)}
        />
         <Box
          value={box[4]}
          onBoxClick={() => {
            handleClick(4);
          }}
          isWinning={winningBoxes.includes(4)}
        />
         <Box
          value={box[5]}
          onBoxClick={() => {
            handleClick(5);
          }}
          isWinning={winningBoxes.includes(5)}
        />
      </div>
      <div className="flex">
        <Box
          value={box[6]}
          onBoxClick={() => {
            handleClick(6);
          }}
          isWinning={winningBoxes.includes(6)}
        />
         <Box
          value={box[7]}
          onBoxClick={() => {
            handleClick(7);
          }}
          isWinning={winningBoxes.includes(7)}
        />
         <Box
          value={box[8]}
          onBoxClick={() => {
            handleClick(8);
          }}
          isWinning={winningBoxes.includes(8)}
        />
      </div>
      <Reset onreset={onreset} />
      </div>
    </> 
  )
  function calculateWin(box){
    const winLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
  
  for(let i=0;i<8;i++){
    const [a,b,c] = winLine[i];
    if( box[a] && box[a]===box[b] && box[c]===box[a]){
        return winLine[i];
    }
  }
}
}
function Status({ status }) {
  return (
    <>
      <button className="w-52 h-10 bg-gray-200 text-xl font-bold border-2 border-gray-400 hover:bg-gray-300 rounded-md m-3">
        {status}
      </button>
    </>
  );
}
function Box({ value ,  onBoxClick , isWinning}) {
    return(
  <>
    <button
      className={`w-10 h-10 bg-gray-200 text-xl font-bold border-2 border-gray-400 rounded-md m-3 ${
        isWinning ? "bg-green-400" : "bg-gray-400"
      }`}
      onClick={onBoxClick}
    >
        {value}
    </button>
  </>
    );
}

function Reset({onreset}){
    return(
        <>
        <button className="w-52 h-10 bg-gray-200 text-xl font-bold border-2 border-gray-400 rounded-md m-3" onClick={onreset}>New Game</button>
        </>
    )
    
}
