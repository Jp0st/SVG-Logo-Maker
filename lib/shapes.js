class Shape {
    constructor() {
        this.color = '';
        this.textColor = '';
    }
    setColor(color) {
        this.color = color;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
    getTextColor() {
        return this.textColor;
    }
    render() {
        console.log('Rendering shape...');
        throw new Error('You have to implement the method render!');
    }
}

class Circle extends Shape {
    render() {
        console.log(`Rendering circle with color ${this.color}`);
        return `<svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" fill="${this.color}" />
                </svg>`;
    }
}

class Triangle extends Shape {
    render() {
        console.log(`Rendering triangle with color ${this.color}`);
        return `<svg width="100" height="100">
                    <polygon points="50,0 100,100 0,100" style="fill:${this.color}"/>
                </svg>`;
    }
}

class Square extends Shape {
    render() {
        console.log(`Rendering square with color ${this.color}`);
        return `<svg width="100" height="100">
                    <rect width="100" height="100" style="fill:${this.color}"/>
                </svg>`;
    }
}

module.exports = { Circle, Triangle, Square, Shape };