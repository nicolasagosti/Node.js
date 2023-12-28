const path = require('node:path')

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// Barra separadora de carpetas segun sistema operativo
console.log(path.sep)

// nombre completo del archivo
const base = path.basename('yo/tu/desktop/password.txt')
console.log(base)
// archivo con su tipo
const fileName = path.basename('yo/tu/desktop/password.txt', '.txt')
console.log(fileName)

// solo te da el tipo de archivo 
const extension = path.extname('yo/tu/desktop/password.txt')
console.log(extension)