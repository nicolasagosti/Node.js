const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.' 

async function ls (folder){
    let files
    try{
        files = await fs.readdir(folder)
    }catch{
        console.error(`no se pudo leer el directorio ${folder}`)
        process.exit(1)
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats 
        try{
            stats = await fs.stat(filePath) // estado / informacion del archivo
        } catch {
            console.error(`no se pudo leer el archivo ${filePath}`)
            process.exit(1)
        }
        let real
        try{
            real = await fs.realpath(filePath) // ruta completa / enlaces simbolicos
        } catch {
            console.error(`no se pudo obtener la ruta completa del archivo ${filePath}`)
            process.exit(1)
        }

        let subCarpeta

        try{
            subCarpeta = await fs.readdir(real)
        } catch {
            console.log(`no se pudo obtener una subcarpeta de ${real}`)
            process.exit(1)
        }
        
    
        const subDirectorio = subCarpeta
        const directorioCompleto = real
        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'tipoDirectorio' : '-'
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()

        return `${fileType} ${fileSize.toString()} ${fileModified}
        el nombre completo del directorio ${directorioCompleto}
        las subcarpetas son: ${subDirectorio}`
    })

    const filesInfo = await Promise.all(filesPromises)

    filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)

fs.readdir(folder)
.then(files => {
    files.forEach(file => {
    console.log(file)
    })
})
.catch(err => {
    if(err){
        console.error('Error al leer el directorio: ', err)
        return;
    }
})


