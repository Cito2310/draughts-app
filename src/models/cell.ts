import { v4 as uuidv4 } from 'uuid';

export class Cell {
    id: string
    color: "black" | "white"
    piece:
        {
            owner: "black" | "white"
            isQueen: boolean
        } 
        | null


    constructor(
        color: "black" | "white",
        hasPiece?: "black" | "white"
    ) {
        this.id = uuidv4()
        this.color = color
        this.piece = hasPiece ? {
            owner: hasPiece,
            isQueen: false
        } : null
    }
}