
import creatdot_target from "./creatdot&target";
import { whatAllowToCapture } from "./capture";
import { isChecked } from "./check&checkmate";
import { defineIntIdxs } from "./defineTheintegerIndexByTheEquation";
export default class Knight {
    static getKnightMoves(y, x) {
        const moves = [
            [x + 1, y + 2],
            [x + 2, y + 1],
            [x + 2, y - 1],
            [x + 1, y - 2],
            [x - 1, y - 2],
            [x - 2, y - 1],
            [x - 2, y + 1],
            [x - 1, y + 2]
        ];

        // Filter out moves that are outside of the board

        const movesAfterfilter = moves.filter(([x, y]) => x > 0 && x <= 8 && y > 0 && y <= 8);
        console.log(movesAfterfilter);
        return movesAfterfilter
    }
    static showPlacesToGo(coordY, coordX, color) {
        const pieceSquare = document.querySelector(`[data-y='${coordY}'][data-x='${coordX}']`);

        const allowPlaces = this.getKnightMoves(coordY, coordX)
        for (let i = 0; i < allowPlaces.length; i++) {
            const placesAllowToGo = document.querySelector(`[data-y='${allowPlaces[i][1]}'][data-x='${allowPlaces[i][0]}']`);
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
        const allowPlaces = this.getKnightMoves(coordY, coordX)
        console.log(allowPlaces)
        for (let i = 0; i < allowPlaces.length; i++) {
            const dangerPlaces = document.querySelector(`[data-y='${allowPlaces[i][1]}'][data-x='${allowPlaces[i][0]}']`);
            dangerPlaces.classList.add(`protected_from${color}`)
            if (dangerPlaces.childElementCount > 0 && dangerPlaces.firstChild.dataset.color != color && dangerPlaces.firstChild.dataset.piece.slice(5) == 'King') {
                const { x: x1, y: y1 } = dangerPlaces.dataset
                const arrOfcheckidxs = defineIntIdxs(coordX, +x1, coordY, +y1)
                for (let j = 0; j < arrOfcheckidxs.length; j++) {
                    const checkIdxsplace = document.querySelector(`[data-y='${arrOfcheckidxs[j][1]}'][data-x='${arrOfcheckidxs[j][0]}']`);
                    checkIdxsplace.classList.add(`danger`)
                }
            } else {
                console.clear()
                console.log('still not check')
       }
            console.log(dangerPlaces)
            console.log('done add class')
        }
    }
}