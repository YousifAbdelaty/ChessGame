// this file has two function first to check if there is a check conditon or no second  to make sure if it's checkmate or no 
import determine from "./determinepieces";
import removedots from "./removedots";

export function isChecked() {

    const blackKing = document.querySelector('[data-piece="blackKing"]');
    const whiteKing = document.querySelector('[data-piece="whiteKing"]');
    if (whiteKing.parentElement.classList.contains('danger')) {
        return true
    }

    if (blackKing.parentElement.classList.contains('danger')) {
        return true
    }
    return false

}

export function isCheckmate() {
    const whiteKing = document.querySelector('[data-piece="whiteKing"]');
    const blackKing = document.querySelector('[data-piece="blackKing"]');
    console.clear()
    const safePlaces = []
    const pieces = document.querySelectorAll(".piece")
    pieces.forEach((piece) => {
        const { piece: pieceName } = piece.dataset;
        const color = pieceName.slice(0, 5)
        const { x, y } = piece.parentElement.dataset;
        if (whiteKing.parentElement.classList.contains('danger') && color == 'white') {
            determine(pieceName, y, x)
        }
        if (blackKing.parentElement.classList.contains('danger') && color == 'black') {
            console.log('hello')
            determine(pieceName, y, x)
        }
    })

    document.querySelectorAll(".dot").forEach(dot => {
        if (dot.parentElement.childElementCount == 1) {

            safePlaces.push(dot.parentElement)
        }
    })
    document.querySelectorAll(".anime").forEach(anime => {


        safePlaces.push(anime.parentElement)

    })
    removedots()
    console.log(safePlaces)
    if (safePlaces.length == 0) {
        console.clear()
        console.log('checkMate')
        setTimeout(function () {
            location.reload();
        }, 3000);
    } else {
        console.log('not checkMate')
    }

}
