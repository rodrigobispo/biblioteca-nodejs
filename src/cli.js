import chalk from "chalk";
import exibeConteudoArquivo from "./index.js";

const caminho = process.argv;

async function processaTexto(caminho) {
    const resultado = await exibeConteudoArquivo(caminho[2]);
    console.log(chalk.yellow('lista de links'), resultado)
}

processaTexto(caminho)
