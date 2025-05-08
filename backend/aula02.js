class pessoa{

    constructor (nome, idade){
    this.idade = idade
    this.nome  = nome 
}

apresentar(){
    console.log(`Olá, meu nome é ${this.nome} tenho anos ${this.idade}!`);
}
}
let pessoa01 = new pessoa ("Lucas", "18")
pessoa01.apresentar();