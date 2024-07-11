
import creatdot_target from "./creatdot&target";
import { whatAllowToCapture } from "./capture";
import { defineIntIdxs } from "./defineTheintegerIndexByTheEquation";
import { isChecked } from "./check&checkmate";
export default class Bishop {
    static getBishopmoves(y, x) {
        const moves = [];
        for (let i = 1; i < 9; i++) {
            const checkSquare = (dx, dy) => {
                for (let i = 1; i < 9; i++) {
                    if (x + dx * i >= 1 && x + dx * i <= 8 && y + dy * i >= 1 && y + dy * i <= 8) {
                        const squareOccupied = document.querySelector(`[data-y='${y + dy * i}'][data-x='${x + dx * i}']`).children.length == 1;
                        if (squareOccupied) {
                            console.log('hello world')
                            moves.push([y + dy * i, x + dx * i]);
                            return true
                        };
                        moves.push([y + dy * i, x + dx * i]);
                        console.log(moves)
                    } else {
                        break;
                    }
                }
                return false;
            };

            checkSquare(1, 1); // Diagonal moves (top-right)
            checkSquare(1, -1); // Diagonal moves (bottom-right)
            checkSquare(-1, 1); // Diagonal moves (top-left)
            checkSquare(-1, -1); // Diagonal moves (bottom-left)
            return moves;
        }
    }

    static showPlacesToGo(coordY, coordX, color = 'red') {
        const pieceSquare = document.querySelector(`[data-y='${coordY}'][data-x='${coordX}']`);

        const allowPlaces = this.getBishopmoves(coordY, coordX)
        for (let i = 0; i < allowPlaces.length; i++) {
            const placesAllowToGo = document.querySelector(`[data-y='${allowPlaces[i][0]}'][data-x='${allowPlaces[i][1]}']`);
            if (isChecked()) {
                console.clear()
                if (placesAllowToGo.classList.contains("danger")) {
                    this.createDot(placesAllowToGo, color,pieceSquare)
                    console.log('incheck mode')
                }
            } else 
            {


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
            console.log(sublistToCheck, arrOfIndex, found,+x1, +x2, +y1, +y2)
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
        const allowPlaces = this.getBishopmoves(coordY, coordX)
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