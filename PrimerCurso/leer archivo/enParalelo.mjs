import { readFile } from 'node:fs/promises'

Promise.all([
    readFile('./archivo.txt','utf-8'),
    readFile('./boliche.txt','utf-8')
]).then(([text,boliche]) => {
    console.log('Primer texto ', text)
    console.log('Segundo texto ', boliche)
})