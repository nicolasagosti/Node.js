import { platform, release, arch, cpus } from 'node:os'

console.log('informacion del sistema operativo')
console.log('___________________________')

console.log('nombre del sistema operativo', platform())
console.log('version del sistema operativo', release())
console.log('arquitectura del sistema operativo', arch())
console.log('CPUs', cpus())