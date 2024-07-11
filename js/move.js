import removedots from "./removedots";
export default function move(selectedPiece, square) {
    if (square.children[0] !== selectedPiece) {
        if (square.children[0].classList.contains("dot")) {
            square.appendChild(selectedPiece);
            removedots()
            selectedPiece = null; // Reset selected piece after moving
        }

    }
}
