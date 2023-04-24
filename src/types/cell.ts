export interface ICell {
    id: string
    color: "black" | "white"
    piece: 
        {
            owner: "black" | "white"
            isQueen: boolean
        } 
        | null
}