
// this file   for all the functon  or the data that related  to the rock 
// get moves to get the  legal moves of the rock
// and show the dots and the circle of the targets (anime  pieces) in  various conditon like the  when it's check and when the rock is pinned

import creatdot_target from "./creatdot&target";
import { whatAllowToCapture } from "./capture";
import { defineIntIdxs } from "./defineTheintegerIndexByTheEquation";
import { isChecked } from "./check&checkmate";

export default class Rock {

    static getRockMoves(y, x) {
        const moves = [];
        let leftBorder = 0, rightBorder = 9, downBorder = 0, upBorder = 9;

        for (let i = 1; i < 9; i++) {
            const verticalSquare = document.querySelector(`[data-y='${y}'][data-x='${i}']`).children.length == 1;
            const horizontalSquare = document.querySelector(`[data-y='${i}'][data-x='${x}']`).children.length == 1;

            if (verticalSquare && i != x) {
                if (i < x) leftBorder = i;
                else if (i < rightBorder) rightBorder = i;
            }

            if (horizontalSquare && i != y) {
                if (i < y) downBorder = i;
                else if (i < upBorder) upBorder = i;
            }
        }

        for (let i = 1; i < 9; i++) {
            if (i !== x && i >= leftBorder && i <= rightBorder) moves.push([y, i]); // Horizontal moves
            if (i !== y && i >= downBorder && i <= upBorder) moves.push([i, x]); // Vertical moves
        }
        return moves
    }

    static showPlacesToGo(coordY, coordX, color = 'red') {
        const pieceSquare = document.querySelector(`[data-y='${coordY}'][data-x='${coordX}']`);

        const allowPlaces = this.getRockMoves(coordY, coordX)
        for (let i = 0; i < allowPlaces.length; i++) {
            const placesAllowToGo = document.querySelector(`[data-y='${allowPlaces[i][0]}'][data-x='${allowPlaces[i][1]}']`);
            if (isChecked()) {
                console.clear()
                if (placesAllowToGo.classList.contains("danger")) {
                    this.createDot(placesAllowToGo, color, pieceSquare)
                    console.log('incheck mode')
                }
            } else {
                this.createDot(placesAllowToGo, color, pieceSquare)

            }
        }
    }

    static createDot(square, color, pieceSquare) {
        if ((square.classList.contains('whomadepin') || square.classList.contains('available')) && pieceSquare.classList.contains('pin')) {
            const { x: x1, y: y1 } = document.querySelector(".whomadepin").dataset
            const { x: x2, y: y2 } = document.querySelector('.inpin').dataset
            console.clear()
            console.log('start check')
            const arrOfIndex = defineIntIdxs(+x1, +x2, +y1, +y2)
            const { x: x3, y: y3 } = square.dataset
            const sublistToCheck = [+x3, +y3]
            let found = arrOfIndex.some(sublist => {
                return sublist.every((val, index) => val === sublistToCheck[index]);
            });
            console.log(sublistToCheck, arrOfIndex, found, +x1, +x2, +y1, +y2)
            if (found) {
                console.log('draw dots')
                console.log(square)
                creatdot_target(square);
                whatAllowToCapture(square, color)
            }

        } else if (!pieceSquare.classList.contains('pin')) {
            creatdot_target(square)
            whatAllowToCapture(square, color)
            console.log('hello world')
        }
    }
    static showdangerPlaces(coordY, coordX, color) {
        const allowPlaces = this.getRockMoves(coordY, coordX)
        console.log(allowPlaces)
        for (let i = 0; i < allowPlaces.length; i++) {
            const dangerPlaces = document.querySelector(`[data-y='${allowPlaces[i][0]}'][data-x='${allowPlaces[i][1]}']`);
            dangerPlaces.classList.add(`protected_from${color}`)
            if (dangerPlaces.childElementCount > 0 && dangerPlaces.firstChild.dataset.color != color && dangerPlaces.firstChild.dataset.piece.slice(5) == 'King') {
                const { x: x1, y: y1 } = dangerPlaces.dataset
                const arrOfcheckidxs = defineIntIdxs(coordX, +x1, coordY, +y1)
                for (let j = 0; j < arrOfcheckidxs.length; j++) {
                    const checkIdxsplace = document.querySelector(`[data-y='${arrOfcheckidxs[j][1]}'][data-x='${arrOfcheckidxs[j][0]}']`);
                    checkIdxsplace.classList.add(`danger`)
                }
            } else {
                console.log('still not check')
            }
        }
    }
}