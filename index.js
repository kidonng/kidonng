#!/usr/bin/env node
const colors = ['blue', 'red', 'yellow', 'green']
const color = colors[Math.floor(Math.random() * colors.length)]
console.info(require('chalk')[color]('Howdy!'))
require('opn')(`https://kidonng.me/#${color}`)
