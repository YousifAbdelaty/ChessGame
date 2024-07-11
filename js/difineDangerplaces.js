// this file to know each square is protected by who and  is there is a case that  one of the rock & bishop &queen attack a piece that is pinned 

import Knight from "./knight";
import King from "./king";
import Queen from "./queen";
import Bishop from "./Bishop";
import Rock from "./Rock";
import { BlackPawn, WhitePawn } from "./pawn";
import isPin from "./isPin";
export function defineDangerPlaces() {
    document.querySelectorAll(".piece").forEach(piece => {
        const { x, y } = piece.parentElement.dataset;
        const color = piece.dataset.color
        const name = piece.dataset.piece
        const whiteKing = document.querySelector('[data-piece="whiteKing"]');
        const blackKing = document.querySelector('[data-piece="blackKing"]');


        if (name == 'whitePawn') {
            console.log(name)
            WhitePawn.showdangerPlaces(+y, +x)
        } else if (name == 'blackPawn') {
            console.log(name);
            BlackPawn.showdangerPlaces(+y, +x)
        }

        if (name == 'whiteKnight' || name == 'blackKnight') {
            console.log(name)
            Knight.showdangerPlaces(+y, +x, color)
        }
        if (name == 'whiteRock' || name == 'blackRock') {
            console.log(name)
            Rock.showdangerPlaces(+y, +x, color)
            if (name == 'whiteRock') {
                isPin(piece.parentElement, blackKing.parentElement)
            } else {
                isPin(piece.parentElement, whiteKing.parentElement)
            }
        }
        if (name == 'whiteBishop' || name == 'blackBishop') {
            console.log(name)
            Bishop.showdangerPlaces(+y, +x, color)
            if (name == 'whiteBishop') {
                isPin(piece.parentElement, blackKing.parentElement)
            } else {
                isPin(piece.parentElement, whiteKing.parentElement)
            }

        }
        if (name == 'whiteQueen' || name == 'blackQueen') {
            Queen.showdangerPlaces(+y, +x, color)
            if (name == 'whiteQueen') {
                isPin(piece.parentElement, blackKing.parentElement)
            } else {
                isPin(piece.parentElement, whiteKing.parentElement)
            }
        }
        if (name == 'whiteKing' || name == 'blackKing') {
            King.showdangerPlaces(+y, +x, color)
            console.log(name)

        }
    })
}