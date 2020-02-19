#!/usr/bin/env node

const emoji = ['🌐', '💭', '💻', '📱', '🎐', '👩‍❤️‍👩', '🎮']
console.log(`${emoji[Math.floor(Math.random() * emoji.length)]} Howdy!`)
require('open')(`https://kidonng.me/`)
