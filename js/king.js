import creatdot_target from "./creatdot&target";
import { whatAllowToCapture } from "./capture";
export default class King {
    static getKingMoves(y, x) {
        const moves = [
            [x + 1, y],
            [x + 1, y + 1],
            [x, y + 1],
            [x - 1, y + 1],
            [x - 1, y],
            [x - 1, y - 1],
            [x, y - 1],
            [x + 1, y - 1]
        ];

        // Filter out moves that are outside of the board
        return moves.filter(([x, y]) => x > 0 && x <= 8 && y > 0 && y <= 8);
    }
    static showPlacesToGo(coordY, coordX, color = 'red') {

        const allowPlaces = this.getKingMoves(coordY, coordX)
        for (let i = 0; i < allowPlaces.length; i++) {
            const placesAllowToGo = document.querySelector(`[data-y='${allowPlaces[i][1]}'][data-x='${allowPlaces[i][0]}']`);
          
            if ( !placesAllowToGo.classList.contains(color == 'white' ? 'protected_fromblack' : 'protected_fromwhite')) {
                this.createDot(placesAllowToGo, color)
            }
       
    
        }
    }

    static createDot(square, color) {
        creatdot_target(square)
        whatAllowToCapture(square, color)
    }
    static showdangerPlaces(coordY, coordX, color) {
        const allowPlaces = this.getKingMoves(coordY, coordX)
        console.log(allowPlaces)
        for (let i = 0; i < allowPlaces.length; i++) {
            const dangerPlaces = document.querySelector(`[data-y='${allowPlaces[i][1]}'][data-x='${allowPlaces[i][0]}']`);
            dangerPlaces.classList.add(`protected_from${color}`)
            console.log(dangerPlaces)
            console.log('done add class')
        }
    }
}