function calculateSquare(side) {
    // Calculate area
    const area = side * side;
    
    // Calculate perimeter
    const perimeter = 4 * side;
    
    return {
        area: area,
        perimeter: perimeter
    };
}

const sideLength = 5; 
const result = calculateSquare(sideLength);
console.log(`Area: ${result.area}, Perimeter: ${result.perimeter}`);
