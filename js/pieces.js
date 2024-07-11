const whitePieces = {
    whiteRock: `https://images.chesscomfiles.com/chess-themes/pieces/neo_wood/150/wr.png`,
    whiteKing: `https://images.chesscomfiles.com/chess-themes/pieces/neo_wood/150/wk.png`,
    whiteQueen: `https://images.chesscomfiles.com/chess-themes/pieces/neo_wood/150/wq.png`,
    whitePawn: `https://images.chesscomfiles.com/chess-themes/pieces/neo_wood/150/wp.png`,
    whiteKnight: `https://images.chesscomfiles.com/chess-themes/pieces/neo_wood/150/wn.png`,
    whiteBishop: `https://images.chesscomfiles.com/chess-themes/pieces/neo_wood/150/wb.png`
};
const blackPieces = {
    blackRock: `https://images.chesscomfiles.com/chess-themes/pieces/neo_wood/150/br.png`,
    blackKnight: `https://images.chesscomfiles.com/chess-themes/pieces/neo_wood/150/bn.png`,
    blackBishop: `https://images.chesscomfiles.com/chess-themes/pieces/neo_wood/150/bb.png`,
    blackKing: `https://images.chesscomfiles.com/chess-themes/pieces/neo_wood/150/bk.png`,
    blackQueen: `https://images.chesscomfiles.com/chess-themes/pieces/neo_wood/150/bq.png`,
    blackPawn: `https://images.chesscomfiles.com/chess-themes/pieces/neo_wood/150/bp.png`,
};
const Pieces = {
    ...blackPieces,
    ...whitePieces
};

export const piecesOrder = [
    'bg-blackRock',
    'bg-blackKnight',
    'bg-blackBishop',
    'bg-blackQueen',
    'bg-blackKing',
    'bg-blackBishop',
    'bg-blackKnight',
    'bg-blackRock',
    'bg-blackPawn',
    'bg-blackPawn',
    'bg-blackPawn',
    'bg-blackPawn',
    'bg-blackPawn',
    'bg-blackPawn',
    'bg-blackPawn',
    'bg-blackPawn',
    'bg-whitePawn',
    'bg-whitePawn',
    'bg-whitePawn',
    'bg-whitePawn',
    'bg-whitePawn',
    'bg-whitePawn',
    'bg-whitePawn',
    'bg-whitePawn',
    'bg-whiteRock',
    'bg-whiteKnight',
    'bg-whiteBishop',
    'bg-whiteQueen',
    'bg-whiteKing',
    'bg-whiteBishop',
    'bg-whiteKnight',
    'bg-whiteRock'
];

export  default Pieces;