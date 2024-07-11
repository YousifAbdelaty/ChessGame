import creatdot_target from "./creatdot&target";
import { defineIntIdxs } from "./defineTheintegerIndexByTheEquation";
import { isChecked } from "./check&checkmate";
export class BlackPawn {
    static color = 'black'
    static showPlacesToGo(coordY, coordX, row = 7, sign = -1) {
        const pieceSquare = document.querySelector(`[data-y='${coordY}'][data-x='${coordX}']`);
        this.whatAllowtoCapture(coordY, coordX, sign)
        for (let i = 1; i < (coordY == row ? 3 : 2); i++) {
            const deltaY = coordY + i * sign;
            const placesAllowToGo = document.querySelector(`[data-y='${deltaY}'][data-x='${coordX}']`);
            if (placesAllowToGo.children.length === 1) {
                break;
            } else {
                if (isChecked()) {
                  
                    if (placesAllowToGo.classList.contains("danger")) {
                        this.createDot(placesAllowToGo, pieceSquare)
                        console.log('incheck mode')
                    }
                } else {
                    this.createDot(placesAllowToGo, pieceSquare)
                }

            }
        }
    }

    static createDot(square, pieceSquare) {

        
            if ((square.classList.contains('whomadepin') || square.classList.contains('available')) && pieceSquare.classList.contains('pin')) {
                const { x: x1, y: y1 } = document.querySelector(".whomadepin").dataset
                const { x: x2, y: y2 } = document.querySelector('.inpin').dataset
              
                console.log('start check')
                const arrOfIndex = defineIntIdxs(+x1, +x2, +y1, +y2)
                const { x: x3, y: y3 } = square.dataset
                const sublistToCheck = [+x3, +y3]
                let found = arrOfIndex.some(sublist => {
                    return sublist.every((val, index) => val === sublistToCheck[index]);
                });
                console.log(sublistToCheck, arrOfIndex, found, +x1, +x2, +y1, +y2)
                if (found) {
                    if (square.children.length === 0) {
                        const whereToGo = document.createElement('div');
                        whereToGo.classList.add('rounded-full', 'w-5', 'h-5', 'bg-chessboard-body', 'opacity-50', 'dot');
                        square.classList.add('flex', 'justify-center', 'items-center');
                        square.appendChild(whereToGo);
                    }

                }

            } else if (!pieceSquare.classList.contains('pin')) {
                if (square.children.length === 0) {
                    const whereToGo = document.createElement('div');
                    whereToGo.classList.add('rounded-full', 'w-5', 'h-5', 'bg-chessboard-body', 'opacity-50', 'dot');
                    square.classList.add('flex', 'justify-center', 'items-center');
                    square.appendChild(whereToGo);
                }
            }
        
    }
    static whatAllowtoCapture(coordY, coordX, sign) {
        const pieceSquare = document.querySelector(`[data-y='${coordY}'][data-x='${coordX}']`);
      
        console.log(pieceSquare)

        for (let i = -1; i < 2; i += 2) {
            if (coordY + 1 * sign > 0 && coordY + 1 * sign < 9 && coordX + 1 * i > 0 && coordX + 1 * i < 9) {
                const attacksquare = document.querySelector(`[data-y='${coordY + 1 * sign}'][data-x='${coordX + 1 * i}']`)
                if (isChecked()) {
                  
                    if (attacksquare.classList.contains("danger")) {
                        this.creatshapeoftarget(attacksquare, pieceSquare)
                        console.log('incheck mode')
                    }
                } else {
                    console.log(pieceSquare)
                    this.creatshapeoftarget(attacksquare, pieceSquare)
                }
            }
        }

    }
    static creatshapeoftarget(square, pieceSquare, colorAtackPiece = this.color) {
        console.log(pieceSquare)
        if (square.children.length > 0 && square.children[0].dataset.color != colorAtackPiece) {
            if ((square.classList.contains('whomadepin') || square.classList.contains('available')) && pieceSquare.classList.contains('pin')) {
                const { x: x1, y: y1 } = document.querySelector(".whomadepin").dataset
                const { x: x2, y: y2 } = document.querySelector('.inpin').dataset
              
                console.log('start check')
                const arrOfIndex = defineIntIdxs(+x1, +x2, +y1, +y2)
                const { x: x3, y: y3 } = square.dataset
                const sublistToCheck = [+x3, +y3]
                let found = arrOfIndex.some(sublist => {
                    return sublist.every((val, index) => val === sublistToCheck[index]);
                });
                console.log(sublistToCheck, arrOfIndex, found, +x1, +x2, +y1, +y2)
                if (found) {
                    creatdot_target(square);
                    square.children[1].classList.add("w-[75px]", 'h-[75px]', 'border-chessboard-body', 'border-4', 'anime')
                    square.children[1].classList.remove('bg-chessboard-body', 'dot')

                }

            } else if (!pieceSquare.classList.contains('pin')) {
                creatdot_target(square);
                    square.children[1].classList.add("w-[75px]", 'h-[75px]', 'border-chessboard-body', 'border-4', 'anime')
                    square.children[1].classList.remove('bg-chessboard-body', 'dot')
            }
        }
    }
    static showdangerPlaces(coordY, coordX, sign = -1) {
        for (let i = -1; i < 2; i += 2) {
            if (coordY + 1 * sign > 0 && coordY + 1 * sign < 9 && coordX + 1 * i > 0 && coordX + 1 * i < 9) {
                const attacksquare = document.querySelector(`[data-y='${coordY + 1 * sign}'][data-x='${coordX + 1 * i}']`)
                attacksquare.classList.add(`protected_from${this.color}`)
                if (attacksquare.childElementCount > 0 && attacksquare.firstChild.dataset.color != this.color && attacksquare.firstChild.dataset.piece.slice(5) == 'King') {

                    const { x: x1, y: y1 } = attacksquare.dataset
                    console.log(coordX, +x1, coordY, +y1)
                    const arrOfcheckidxs = defineIntIdxs(coordX, +x1, coordY, +y1)

                    for (let j = 0; j < arrOfcheckidxs.length; j++) {
                        const checkIdxsplace = document.querySelector(`[data-y='${arrOfcheckidxs[j][1]}'][data-x='${arrOfcheckidxs[j][0]}']`);
                        console.log(checkIdxsplace)
                        checkIdxsplace.classList.add(`danger`)
                    }
                } else {
                    console.log('still not check')
                }

            }
        }
    }
}

export class WhitePawn extends BlackPawn {
    static showPlacesToGo(coordY, coordX, row = 2, sign = 1) {
        super.color = 'white'
        super.showPlacesToGo(coordY, coordX, row, sign);
    }
    static showdangerPlaces(coordY, coordX, sign = 1) {
        super.color = 'white'
        super.showdangerPlaces(coordY, coordX, sign)
    }
}
