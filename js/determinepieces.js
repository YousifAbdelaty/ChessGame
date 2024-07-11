import Knight from "./knight";
import King from "./king";
import Queen from "./queen";
import Bishop from "./Bishop";
import Rock from "./Rock";
import { BlackPawn, WhitePawn } from "./pawn";


export default function determine(piece, y, x) {
    if (piece === 'blackPawn') {
        BlackPawn.showPlacesToGo(+y, +x);
    } else if (piece === 'whitePawn') {
        WhitePawn.showPlacesToGo(+y, +x);
    } else if (piece === 'whiteKnight' || piece === 'blackKnight') {
        Knight.showPlacesToGo(+y, +x, piece.slice(0, 5));
    } else if (piece === 'whiteKing' || piece === 'blackKing') {
        King.showPlacesToGo(+y, +x, piece.slice(0, 5));
    } else if (piece === 'whiteQueen' || piece === 'blackQueen') {
        Queen.showPlacesToGo(+y, +x, piece.slice(0, 5))
    } else if (piece === 'whiteBishop' || piece === 'blackBishop') {
        Bishop.showPlacesToGo(+y, +x, piece.slice(0, 5))
    } else if (piece === 'whiteRock' || piece === 'blackRock') {
        Rock.showPlacesToGo(+y, +x, piece.slice(0, 5))
    }
}