const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function iniciarDesafio() {
    const rl = readline.createInterface({ input, output });

    // O comando rl.question substitui o prompt() no terminal
    let nomeHeroi = await rl.question('Digite o nome do herói: ');
    let xpHeroi = parseInt(await rl.question('Digite a quantidade de experiência do herói: '));

    // Fecha a conexão com o terminal após ler os dados
    rl.close(); 

    // Sua lógica de Switch Case idêntica e sem buracos:
    switch (true) {
        case (xpHeroi <= 1000):
            console.log(`O Herói de nome ${nomeHeroi} está no nível de Ferro`);
            break;
        case (xpHeroi <= 2000):
            console.log(`O Herói de nome ${nomeHeroi} está no nível de Bronze`);
            break;
        case (xpHeroi <= 5000):
            console.log(`O Herói de nome ${nomeHeroi} está no nível de Prata`);
            break;
        case (xpHeroi <= 7000):
            console.log(`O Herói de nome ${nomeHeroi} está no nível de Ouro`);
            break;
        case (xpHeroi <= 8000):
            console.log(`O Herói de nome ${nomeHeroi} está no nível de Platina`);
            break;
        case (xpHeroi <= 9000):
            console.log(`O Herói de nome ${nomeHeroi} está no nível de Ascendente`);
            break;  
        case (xpHeroi <= 10000):
            console.log(`O Herói de nome ${nomeHeroi} está no nível de Imortal`);
            break;
        case (xpHeroi >= 10001):
            console.log(`O Herói de nome ${nomeHeroi} está no nível de Radiante`);
            break;
        default:
            console.log(`O Herói de nome ${nomeHeroi} não possui experiência suficiente para ser classificado.`);
            break;
    }
}

// Executa a função principal
iniciarDesafio();
