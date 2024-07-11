// this file  to  know if there is a pin condition or no 
// adn start to add special classes if  there is  pin condition

import { defineIntIdxs } from "./defineTheintegerIndexByTheEquation"
export default function isPin(attackElementSquare, kingSquare) {
    console.log(kingSquare, attackElementSquare)
    const { x: x1, y: y1 } = attackElementSquare.dataset;
    const { x: x2, y: y2 } = kingSquare.dataset;
    console.log(+x1, +x2, +y1, +y2)
    const arrOfplacesbetween = defineIntIdxs(+x1, +x2, +y1, +y2);
    console.log(arrOfplacesbetween)
    let thePinnedSquare;
    let countforKing = 0
    let countForAttack = 0
    for (let j = 1; j < arrOfplacesbetween.length - 1; j++) {
        const checkIdxsplace = document.querySelector(`[data-y='${arrOfplacesbetween[j][1]}'][data-x='${arrOfplacesbetween[j][0]}']`);
console.log(checkIdxsplace)
        checkIdxsplace.classList.add(`available`)
        if (checkIdxsplace.childElementCount > 0) {
            if (checkIdxsplace.children[0].dataset.color != attackElementSquare.children[0].dataset.color) {
                thePinnedSquare = checkIdxsplace;
                countforKing++
            } else {
                countForAttack++
            }
        }
    }
    if (countforKing == 1 && countForAttack == 0) {
        console.log(attackElementSquare, thePinnedSquare)
        thePinnedSquare.classList.add("pin")
        attackElementSquare.classList.add('whomadepin')
        kingSquare.classList.add('inpin')

    } else {
        console.log('notPin')

    }
}
