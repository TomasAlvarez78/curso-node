const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    edad: 999,

    getNombre(){
        return `${this.nombre} ${this.apellido}`
    }

}

// console.log(deadpool.getNombre())
// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder  = deadpool.poder;

function printHero  ({nombre, apellido, poder, edad = 0}){
    console.log(nombre, apellido, poder, edad);
}

const heroes = ['Deadpool','Superman','Batman'];

const [h1,h2,h3] = heroes;

console.log(h1,h2,h3);

printHero(deadpool)


