const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');
const { text } = require('stream/consumers');

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
        validate: function (shapeColor){
            if(/^#([a-Fa-F0-9]{6}|[a-Fa-F0-9]{3})$/.test(shapeColor) || /^(red|yellow|orange|green|blue|purple|...)$i/.test(shapeColor)){
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
        validate:function(text){
            if(text.length <= 3){
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
            if (/^#([a-Fa-F0-9]{6}|[a-Fa-F0-9]{3})$/.test(textColor) || /^(red|yellow|orange|green|blue|purple|...)$i/.test(textColor)) {
                return true;
            }
            console.log('Please enter a valid color or a valid hex code and try again!');
            return false;
        }
    }
];