import { useState } from "react"
import "./TicTakToe.css";

const TicTakToe = () => {

    const [board, setBoard] = useState(Array(9).fill(null))

    const [xTurn, setXTurn] = useState(true)

    const [winner, setWinner] = useState(null);

    const player = xTurn ? "Player 1" : "Player 2"

    const handleClick = (index) => {
        console.log("clicked", index)

        if (board[index]) {
            return;
        }
        let temp = [...board];
        temp[index] = xTurn ? "X" : "O"
        setBoard(temp);
        setXTurn(!xTurn);
        const winnerCheck = checkWinner(temp);
        if (winnerCheck) {
            setWinner(winnerCheck);
        } else {
            setXTurn(!xTurn);
        }
    }



    const checkWinner = (board) => {

        const combinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < combinations.length; i++) {
            const [a, b, c] = combinations[i];

            if (board[a] === board[b] && board[b] === board[c]) {
                return board[a];
            }

        }
        return null;
    }


    return (
        <>
            <div className="container">
                {
                    board.map((item, index) => {
                        return <div onClick={() => handleClick(index)} className="cell" key={index}> {item} </div>
                    })
                }
            </div>
            {winner ? (
                <div className="winner">Winner: {winner === "X" ? "Player 1" : "Player 2"}</div>
            ) : (
                <div>Turn - {player}</div>
            )}
        </>

    )
}

export default TicTakToe;