const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
const text = fs.readFileSync('./archivo.txt','utf-8') 
    console.log(text)



console.log('-----> Hacer cosas mientras lee el primer archivo...')

console.log('Leyendo el segundo archivo...')
const textBoliche = fs.readFileSync('./boliche.txt','utf-8')
    console.log(textBoliche)


console.log('-----> Hacer cosas mientras lee el segundo archivo...')