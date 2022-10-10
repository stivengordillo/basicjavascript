class PersonaNatural{

    static _conteo = 0;
    static get conteo(){
        return PersonaNatural._conteo + ' instancias';
    }
    static mensaje(){
        console.log('Estos es un metodo estatico');
    }

    nombre ='';
    codigo ='';
    frase  ='';
    comida ='';

    constructor(nombre = 'Sin nombre',codigo='no Cod',frase='Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        PersonaNatural._conteo ++;
        //console.log('hola!')
    }


    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ... ${this.codigo}`)
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`)
    }


}

const spiderman = new PersonaNatural('Peter parker', 'Spiderman', 'Su amigable vecino el hombre araña');
const ironman   = new PersonaNatural('Tony stark', 'Ironman', 'yo soy Ironman');
const rogers    = new PersonaNatural('Capitan rogers', 'Cap america', 'Esas palabrotas');

//PersonaNatural._conteo=2;


console.log(spiderman);
console.log(ironman);
spiderman.quienSoy();
ironman.quienSoy();

console.log('-------')
spiderman.miFrase();
//ironman.miFrase();

console.log('-------')
spiderman.setComidaFavorita = 'pie de limon';
//spiderman.nemesis = 'duende verde';
console.log(spiderman.getComidaFavorita)
console.log(spiderman)

console.log('-------')
console.log('Conteo estatico' , PersonaNatural._conteo);
console.log(PersonaNatural.conteo);
PersonaNatural.mensaje();