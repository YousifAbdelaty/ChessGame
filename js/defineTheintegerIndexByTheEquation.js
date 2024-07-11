// this file to generate the all the  indexs between the attack element and the king this will use to know if 
// there is one piece has the same color as the king which will help use to know if there is a pin coniditon or no 


export function defineIntIdxs(x1, x2, y1, y2) {
    const coordinates = [];

    // If the line is vertical, handle it separately
    if (x1 === x2) {
        const stepY = Math.sign(y2 - y1);
        for (let y = y1; y !== y2; y += stepY) {
            coordinates.push([x1, y]);
        }
        coordinates.push([x1, y2]);
        return coordinates;
    }

    const slope = (y2 - y1) / (x2 - x1);
    let stepX = Math.sign(x2 - x1);


    if (stepX < 0) {
        stepX *= -1;
        [x1, x2] = [x2, x1];
        [y1, y2] = [y2, y1];
    }

    for (let x = x1; x <= x2; x += stepX) {
        if ((Math.round(slope * (x - x1) + y1) == slope * (x - x1) + y1) && (slope == 1 || slope == -1 || slope == 0)) {
            const y = Math.round(slope * (x - x1) + y1);
            coordinates.push([x, y]);
        }
    }

    return coordinates;
}
