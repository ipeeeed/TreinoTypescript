// export class main {
//     nome:string = "";
//     idade:number = 0

//     imprimeclass(){
//     console.log(`Olá meu nome é ${this.nome} e eu tenho ${this.idade}`)
//     }}

//     const pessoa = new main;
//     pessoa.nome = "Indio";
//     pessoa.idade = 90;

//     pessoa.imprimeclass();



export class main {
    nome:string = "";
    idade:number = 0;
    altura:number = 0;
    trabalho:boolean = false ;
    
    imprime(){
        console.log(`O meu nome é ${this.nome}, tenho ${this.idade} anos, minha altura atualmente é ${this.altura}`)
        if(this.trabalho === true){
            console.log("Trabalhador");

        }else{
        console.log("Vagabundo");
        }
    }
}

const pessoa = new main;
pessoa.nome = "João"; 
pessoa.altura = 8.5;
pessoa.idade = 19;

pessoa.imprime()