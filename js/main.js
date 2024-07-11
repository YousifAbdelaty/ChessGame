import '../style.css'
import setup from './setup';
import move from './move';
import removedots from './removedots';
import determinePieces from './determinepieces';
import { killPiece } from './capture';
import { defineDangerPlaces } from './difineDangerplaces';
import { removeDangerPlacesForUpdate } from './removedots';
import { isChecked, isCheckmate } from './check&checkmate';
import { defineIntIdxs } from './defineTheintegerIndexByTheEquation';
import { promotion } from './promotion';
const chessBoard = document.querySelector(".chessboard");
setup(chessBoard);
const pieces = document.querySelectorAll(".piece");
const squares = document.querySelectorAll(".square");
let selectedPiece;
let turn = 'white'
defineDangerPlaces();
pieces.forEach(piece => {

    piece.addEventListener('click', (e) => {
        if (piece.parentElement.childElementCount == 1 || (piece.parentElement.childElementCount == 2 && piece.parentElement.children[1].classList.contains('dot'))) {
            removedots();
            selectedPiece = e.target;
            const { piece } = selectedPiece.dataset;
            const { x, y } = selectedPiece.parentElement.dataset;
            console.log(turn)
            if (piece.slice(0, 5) == turn) {
                console.log('make the dots')
                determinePieces(piece, y, x);
            }
        }

    });
});



squares.forEach(square => {
    console.log
    square.addEventListener('click', () => {
        if (square.children[0] != selectedPiece) {

            if (square.children.length == 1) {
                move(selectedPiece, square)
                console.log('hohoho')
                removeDangerPlacesForUpdate();
                console.log("hehehehe")
                defineDangerPlaces();
                promotion()
                if (isChecked()) isCheckmate()
                turn = turn == 'white' ? 'black' : 'white';


            } else if (square.children[1].classList.contains("anime")) {
                killPiece(selectedPiece, square)
                removeDangerPlacesForUpdate()
                defineDangerPlaces();
                promotion()

                if (isChecked()) isCheckmate()
                turn = turn == 'white' ? 'black' : 'white';

            }
        }


    })
})

