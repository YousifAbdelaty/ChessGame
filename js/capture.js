
// this function take the square which has the dot but  in special conditons and make it class anime and add the syle of the cyrcle
import removedots from "./removedots"
export function whatAllowToCapture(square, colorAtackPiece) {

    console.log('hello')
    if (square.children.length == 2 && square.children[0].dataset.color != colorAtackPiece) {
        square.children[1].classList.add("w-[75px]", 'h-[75px]', 'border-chessboard-body', 'border-4', 'anime')
        square.children[1].classList.remove('bg-chessboard-body', 'dot')
    } else if (square.children.length == 2) {
        square.children[1].classList.remove('bg-chessboard-body')
    }

}
// this function take the piece which will kill and remove the peice which be killed 
export function killPiece(selectedPiece, square) {
    if (square.children[1].classList.contains("anime")) {
        square.children[0].remove()
        square.appendChild(selectedPiece);
        removedots()
        selectedPiece = null;
    }

}