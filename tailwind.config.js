/** @type {import('tailwindcss').Config} */
import Pieces from './js/pieces';
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        chessboard: {
          whiteSquare: '#FFFFF0', // Ivory
          blackSquare: '#8B4513',
          body: '#481E14'
        }
      },
      backgroundImage: {
        'blackRock': `url(${Pieces.blackRock})`,
        'blackKing': `url(${Pieces.blackKing})`,
        'blackQueen': `url(${Pieces.blackQueen})`,
        'blackPawn': `url(${Pieces.blackPawn})`,
        'blackKnight': `url(${Pieces.blackKnight})`,
        'blackBishop': `url(${Pieces.blackBishop})`,
        'whiteRock': `url(${Pieces.whiteRock})`,
        'whiteKing': `url(${Pieces.whiteKing})`,
        'whiteQueen': `url(${Pieces.whiteQueen})`,
        'whitePawn': `url(${Pieces.whitePawn})`,
        'whiteKnight': `url(${Pieces.whiteKnight})`,
        'whiteBishop': `url(${Pieces.whiteBishop})`
      }
    }
  },
  plugins: [],
}