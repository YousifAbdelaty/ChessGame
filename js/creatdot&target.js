export default function creatdot_target(square) {
    const whereToGo = document.createElement('div');
    square.classList.add('flex', 'justify-center', 'items-center');
    whereToGo.classList.add('rounded-full', 'w-5', 'h-5', 'bg-chessboard-body', 'opacity-50', 'dot');
 
    square.appendChild(whereToGo);
}
// this func take a squaere and add  to it a child that has the style of the dot 