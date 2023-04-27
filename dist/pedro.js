"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
class Main {
    constructor() {
        this.nome = "";
        this.idade = 0;
        this.trabalha = true;
    }
    imprimeAtributos() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} e `);
        if (this.trabalha == true) {
            console.log("eu tenho um trabalho!");
        }
        else {
            console.log("eu não tenho um trabalho!");
        }
    }
}
exports.Main = Main;
const pessoa = new Main; //Instanciei a Classe e transformei em Objeto
pessoa.nome = "Pedro";
pessoa.idade = 25;
pessoa.trabalha = false;
pessoa.imprimeAtributos();
const pessoa2 = new Main;
pessoa2.nome = "Kauã";
pessoa2.idade = 20;
pessoa2.trabalha = true;
pessoa2.imprimeAtributos();
