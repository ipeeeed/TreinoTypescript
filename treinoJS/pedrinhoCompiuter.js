console.log("\nUm olar como nenhum outro!\n");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Escreva seu nome: `, nome => {
    console.log(`\nOlá ${nome}!\n\nAperte [Ctrl + C] para sair`);
    readline.close
})
