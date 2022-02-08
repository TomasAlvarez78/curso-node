// setTimeout( () => {
//     console.log("a")
// },1000)

const getUsuarioById = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Fernando'
    }

    setTimeout( () => {
        callback(usuario)
    },1000)
}

getUsuarioById(3, (usuario) => {
    console.log(`Hola ${usuario.nombre.toUpperCase()} (id:${usuario.id})`)
})

