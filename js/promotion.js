import { defineDangerPlaces } from "./difineDangerplaces"
import removedots, { removeDangerPlacesForUpdate } from "./removedots"

export function promotion() {
    document.querySelectorAll(`[data-piece='blackPawn']`).forEach(blackPawn => {
        if (blackPawn.parentElement.dataset.y == 1) {

            blackPawn.classList.remove('bg-blackPawn')
            blackPawn.classList.add('bg-blackQueen')
            blackPawn.setAttribute('data-piece', 'blackQueen')
            removeDangerPlacesForUpdate()
            defineDangerPlaces()
        }
    })
    document.querySelectorAll(`[data-piece='whitePawn']`).forEach(whitePawn => {
        if (whitePawn.parentElement.dataset.y == 8) {
            whitePawn.classList.remove('bg-whitePawn')
            whitePawn.classList.add('bg-whiteQueen')
            whitePawn.setAttribute('data-piece', 'whiteQueen')
            removeDangerPlacesForUpdate()
            defineDangerPlaces()

        }
    })

}