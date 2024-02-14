import {React, useState } from "react";

import Square from "./Square";

const Board = () => {
    const [state,setState] = useState(Array(9).fill(null));
    const [isXturn, setXturn] = useState(true);

    console.log("state", state);

    const handleClick = (index) => {
        if(state[index] != null){
            return;
        }
        const copyState = [...state];
        copyState[index]= isXturn ? "X" : "O";
        setState(copyState);
        setXturn(!isXturn);
        // console.log("index",index)
    };

    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 6, 4],
        ]

        for(const logic of winnerLogic){
            const [a, b, c] = logic;
            if(state[a] != null && state[a] === state[b] && state[b] === state[c] && state[a] === state[c]){
                return state[a];
            }

            if(state.every((square) => square != null )){
                return "draw";
            }
        }

        return false;
    }

    const isWinner = checkWinner();

    const handleReset = () => {
        setState(Array(9).fill(null));
        setXturn(true);
    }

    return (
        <div className="container">
            {
            isWinner ? 
            <>
              {isWinner} won! <button onClick={handleReset}>Play Again</button>
            </>      :
            <>
            <h4>Player {isXturn ? "X" : "O"} turn</h4>
            <div className="row">
                <Square onClick={() => handleClick(0)} value={state[0]}/>
                <Square onClick={() => handleClick(1)} value={state[1]}/>
                <Square onClick={() => handleClick(2)} value={state[2]}/>
            </div>
            <div className="row">
                <Square onClick={() => handleClick(3)} value={state[3]}/>
                <Square onClick={() => handleClick(4)} value={state[4]}/>
                <Square onClick={() => handleClick(5)} value={state[5]}/>
            </div>
            <div className="row">
                <Square onClick={() => handleClick(6)} value={state[6]}/>
                <Square onClick={() => handleClick(7)} value={state[7]}/>
                <Square onClick={() => handleClick(8)} value={state[8]}/>
            </div>
            </>
             }
        </div>
    );
};

export default Board;