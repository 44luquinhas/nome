class Carro{

    constructor (marca,modelo,ano){       
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;

}
ligar(){
    console.log(`${this.marca} ${this.modelo} está ligado!`);
    }
}

let meuCarro= new Carro("Hyundai","Sonata", 2025);
meuCarro.ligar();
