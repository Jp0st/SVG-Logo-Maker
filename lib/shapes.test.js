const { Shape, Circle, Square, Triangle } = require('./shapes');

test('Shape generation works', () => {
    const shapeInstance = new Shape();
    expect(() => shapeInstance.render()).toThrowError('You have to implement the method render!');
});

test('Circle generation works', () => {
    const circle = new Circle();
    circle.setColor('yellow');
    const expected = `<svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" fill="yellow" />
                </svg>`;
    expect(circle.render()).toEqual(expected);
});

test('Square generation works', () => {
    const square = new Square();
    square.setColor('red');
    const expected = `<svg width="100" height="100">
                    <rect width="100" height="100" style="fill:red"/>
                </svg>`;
    expect(square.render()).toEqual(expected);
});

test('Triangle generation works', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const expected = `<svg width="100" height="100">
                    <polygon points="50,0 100,100 0,100" style="fill:blue"/>
                </svg>`;
    expect(triangle.render()).toEqual(expected);
});
