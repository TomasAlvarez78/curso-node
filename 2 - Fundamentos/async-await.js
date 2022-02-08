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
    
    return new Promise ((resolve,reject)=> {
        const empleado = empleados.find( (e) => e.id == id)?.nombre;
        ( empleado ) 
        ? resolve(empleado) 
        : reject(`No existe empleado con id ${id}`);
    })

}

const getSalario = (id, callback) => {
    
    return new Promise ((resolve,reject)=> {
        const salario = salarios.find( (s) => s.id == id)?.salario;
        ( salario ) 
        ? resolve(salario) 
        : reject(`No existe salario con id ${id}`);
    })

}

const getInfoUsuario = async( id ) => {
    
    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
    
        return `El salario de ${empleado} es de $${salario}`;
    }catch (error){
        return error;
    }

}

const id = 1;

getInfoUsuario( id )
    .then(msg => console.log(msg))
    .catch(err => console.log(err))