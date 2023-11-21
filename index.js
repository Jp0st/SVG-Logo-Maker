const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What is the shape?',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What is the color of the shape?',
        validate: function (shapeColor) {
            if (/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(shapeColor) || /^(red|yellow|orange|green|blue|purple)$/i.test(shapeColor)) {
                return true;
            }
            console.log('Please enter a valid color or a valid hex code and try again!');
            return false;
        }
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please enter the text you would like to display on the shape: (Maximum three (3) characters)',
        validate: function (text) {
            if (text.length <= 3) {
                return true;
            }
            console.log('Please enter a maximum of three (3) characters and try again!');
            return false;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What would you like the color of the text to be?',
        validate: function (textColor) {
            if (/^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(textColor) || /^(red|yellow|orange|green|blue|purple)$/i.test(textColor)) {
                return true;
            }
            console.log('Please enter a valid color or a valid hex code and try again!');
            return false;
        }
    }
];

const createLogo = ({ shape, shapeColor, text, textColor }) => {
    let shapePicked;

    switch (shape) {
        case 'Circle':
            shapePicked = new Circle();
            break;
        case 'Triangle':
            shapePicked = new Triangle();
            break;
        case 'Square':
            shapePicked = new Square();
            break;
        default:
            console.log('Please choose a valid shape and try again!');
            return;
    }

    shapePicked.setColor(shapeColor);

    if (textColor) {
        shapePicked.setTextColor(textColor);
    }

    const shapeSvg = shapePicked.render();
    
    const shapeWidth = 100;
    const shapeHeight = 100; 

    const svgInfo = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${shapeWidth}" height="${shapeHeight}">
        ${shapeSvg}
        <text x="${shapeWidth / 2}" y="${shapeHeight / 2}" dominant-baseline="middle" text-anchor="middle" fill="${shapePicked.getTextColor()}">${text}</text>
    </svg>`;

    const examplesFolderPath = './examples';
    const svgFilePath = `${examplesFolderPath}/logo.svg`;

    fs.writeFile(svgFilePath, svgInfo, (err) => {
        if (err) {
            console.log('Error writing file:', err);
        } else {
            console.log('Your logo has been created!');
        }
    });
};

const init = () => {
    inquirer
        .prompt(questions)
        .then((answers) => {
            createLogo(answers);
        })
        .catch((err) => console.log(err));
};


init();
