"use strict";
// export class main {
//     nome:string = "";
//     idade:number = 0
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
//     imprimeclass(){
//     console.log(`Olá meu nome é ${this.nome} e eu tenho ${this.idade}`)
//     }}
//     const pessoa = new main;
//     pessoa.nome = "Indio";
//     pessoa.idade = 90;
//     pessoa.imprimeclass();
class main {
    constructor() {
        this.nome = "";
        this.idade = 0;
        this.altura = 0;
        this.trabalho = false;
    }
    imprime() {
        console.log(`O meu nome é ${this.nome}, tenho ${this.idade} anos, minha altura atualmente é ${this.altura}`);
        if (this.trabalho === true) {
            console.log("Trabalhador");
        }
        else {
            console.log("Vagabundo");
        }
    }
}
exports.main = main;
const pessoa = new main;
pessoa.nome = "João";
pessoa.altura = 8.5;
pessoa.idade = 19;
pessoa.imprime();
