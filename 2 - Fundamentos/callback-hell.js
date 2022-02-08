const empleados = [
    {
        id: 1,
        nombre: "Pepe"
    },
    {
        id: 2,
        nombre: "Mario"
    },
    {
        id: 3,
        nombre: "Federico"
    },
    {
        id: 4,
        nombre: "Paulina"
    }
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1250
    },
    {
        id: 3,
        salario: 5000
    }
]


const getEmpleado = (id, callback) => {
    const empleado = empleados.find( (e) => e.id == id)?.nombre

    if(empleado){
        callback(null, empleado);
    }else{
        callback(`Empleado con id ${id} no existe`)
    }
}

const getSalario = (id, callback) => {
    const salario = salarios.find( (s) => s.id == id)?.salario;

    if(salario){
        callback(null, salario);
    }else{
        callback(`Salario con id ${id} no existe`)
    }
}

const id = 4;

getEmpleado(id,(err,empleado) => {

    if(err){
        console.log("Error!");
        return console.log(err);
    }

    console.log(empleado)
    getSalario(id,(err,salario) => {

        if(err){
            console.log("Error!");
            return console.log(err);
        }
    
        console.log(salario)
        console.log(`El empleado ${empleado} tiene un salario de $${salario}`)
    })

})

// getSalario(id,(err,salario) => {

//     if(err){
//         console.log("Error!");
//         return console.log(err);
//     }

//     console.log(salario)
// })