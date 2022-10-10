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

class Heroe extends PersonaNatural{
    
    clan='sin clan';
    constructor(nombre,codigo,frase){
        //El super siempre va arriba
        super(nombre,codigo,frase);
        this.clan="vengadores";
    }
    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter parker', 'Spiderman', 'Su amigable vecino el hombre araña');
//const spiderman = new Heroe();
console.log(spiderman);
spiderman.quienSoy();