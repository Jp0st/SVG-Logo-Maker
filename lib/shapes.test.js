const { Shape, Circle, Square, Triangle } = require('./shapes');

test('Shape generation works', () => {
    const shape = () => {
        const shapeInstance = new Shape();
        return shapeInstance.render();
    };

    const error = new Error('You have to implement the method render!');
    expect(shape).toThrowError(error);
});

test('Circle generation works', () => {
    const circle = new Circle();
    circle.setColor('yellow');
    const expected = '<svg height="100" width="100"><circle cx="50" cy="50" r="40" fill="yellow" /></svg>';
    expect(circle.render().replace(/\s+/g, '')).toEqual(expected.replace(/\s+/g, ''));
});

test('Square generation works', () => {
    const square = new Square();
    square.setColor('red');
    const expected = '<svg height="100" width="100"><rect width="100" height="100" style="fill:red"/></svg>';
    expect(square.render().replace(/\s+/g, '')).toEqual(expected.replace(/\s+/g, ''));
});

test('Triangle generation works', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const expected = '<svg height="100" width="100"><polygon points="50,0 100,100 0,100" style="fill:blue"/></svg>';
    expect(triangle.render().replace(/\s+/g, '')).toEqual(expected.replace(/\s+/g, ''));
});
