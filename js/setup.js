// this file to make the whole board with  the right order in the beginning of the game
import { piecesOrder } from './pieces';
function setup(board) {
    let newSquare
    let contentSquare
    let indexPieces = 0;
    let coordsX = 0;
    let coordsY = 8;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            newSquare = document.createElement('div');
            newSquare.setAttribute('data-x', `${coordsX + 1}`)
            newSquare.setAttribute('data-y', `${coordsY}`)
            newSquare.classList.add('square', 'border-black', 'border-2', 'relative');
            if (!(i < 6 && i > 1)) {
                contentSquare = document.createElement('div')
                if (!(i < 6)) {
                    contentSquare.setAttribute("data-color", "white")
                } else if (!(i > 1)) {
                    contentSquare.setAttribute("data-color", "black")
                }
                newSquare.appendChild(contentSquare)
                contentSquare.classList.add('bg-no-repeat', 'bg-cover', 'h-full', 'w-full', `${piecesOrder[indexPieces]}`, 'cursor-pointer', 'piece', 'z-10', 'absolute');
                contentSquare.setAttribute("data-piece", `${piecesOrder[indexPieces].slice(3)}`)
                indexPieces++
            }
            board.appendChild(newSquare);
            ++coordsX
        }
        coordsX = 0
        --coordsY
    }
    document.querySelectorAll(".square").forEach((square, i) => {
        const row = Math.floor((63 - i) / 8) + 1
        if (!(row % 2 == 0)) {
            square.classList.add(i % 2 == 0 ? 'bg-chessboard-blackSquare' : 'bg-chessboard-whiteSquare')
        } else {
            square.classList.add(i % 2 == 0 ? 'bg-chessboard-whiteSquare' : 'bg-chessboard-blackSquare')

        }
    })
}
export default setup;