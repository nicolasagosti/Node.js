const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt','utf-8') 
.then(text => {
    console.log(text)
})
    
console.log('-----> Hacer cosas mientras lee el primer archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./boliche.txt','utf-8')
.then(text =>{
    console.log(text)
})
  


console.log('-----> Hacer cosas mientras lee el segundo archivo...')