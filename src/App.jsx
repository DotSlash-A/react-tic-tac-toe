import { useState } from "react";

function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquare={()=>handleClick(0)}/>
        <Square value={squares[1]} onSquare={()=>handleClick(1)}/>
        <Square value={squares[2]} onSquare={()=>handleClick(2)}/>

      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquare={()=>handleClick(3)}/>
        <Square value={squares[4]} onSquare={()=>handleClick(4}/>
        <Square value={squares[5]} onSquare={()=>handleClick(5)}/>

      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquare={()=>handleClick(6)}/>
        <Square value={squares[7]} onSquare={()=>handleClick(7)}/>
        <Square value={squares[8]} onSquare={()=>handleClick(8)}/>

      </div>

    </>
  )
}