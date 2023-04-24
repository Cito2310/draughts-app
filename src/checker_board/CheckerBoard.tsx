import { useState } from "react"
import { ICell } from "../types/cell";
import "./checker-board.scss"
import { Cell } from "../models/cell";


const initialState = (): ICell[][] => {
    let state: ICell[][] = [];

    for (let row = 0; row < 8; row++) {
        const rowPair = row % 2 === 0;
        state.push([]);

        for (let j = 0; j < 8; j++) {
            const jPair = j % 2 === 0;

            const placePieces = () => {
                if (row < 3) return "black";
                if (row > 4) return "white";

                return undefined;
            }


            if (rowPair && jPair)     state[row].push(new Cell("black", placePieces() ))
            if (rowPair && !jPair)    state[row].push(new Cell("white"))
            if (!rowPair && jPair)    state[row].push(new Cell("white"))
            if (!rowPair && !jPair)   state[row].push(new Cell("black", placePieces() ))
        }
    }

    return state;
}

export const CheckerBoard = () => {


    const [checkBoard, setCheckBoard] = useState(initialState())


    console.log(checkBoard)
    return (
        <section className="checker-board">
            {
                checkBoard.map( row =>  
                    <div className="checker-board_row">{
                        row.map( cell => <div className="checker-board_row_cell" style={{backgroundColor: cell.color === "black" ? "#b8713e" : "#f2f2f2"}}>
                            {
                                cell.piece ?
                                <div
                                    className="checker-board_piece"
                                    style={{backgroundColor: cell.piece.owner === "black" ? "#000" : "#ffffff"}}
                                />
                                : null
                            }
                        </div> )
                    }</div>
                )
            }
        </section>
    )
}