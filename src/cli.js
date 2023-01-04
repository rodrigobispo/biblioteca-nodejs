import chalk from "chalk";
import fs from 'fs';
import exibeConteudoArquivo from "./index.js";

const caminhoDaLinhaDeComando = process.argv;

async function processaTexto(argumentos) {

    const caminho = argumentos[2];

    if (fs.lstatSync(caminho).isFile()) {

        imprimeListaDeLinks(caminho);

    } else if (fs.lstatSync(caminho).isDirectory()) {

        const arquivos = await fs.promises.readdir(caminho);

        arquivos.forEach(async nomeDeArquivo => {
            imprimeListaDeLinks(`${caminho}/${nomeDeArquivo}`);
        })
        console.log(arquivos);
    }
}

async function imprimeListaDeLinks(caminho) {
    const resultado = await exibeConteudoArquivo(caminho);
    console.log(chalk.yellow('lista de links'), resultado);
}

processaTexto(caminhoDaLinhaDeComando);
