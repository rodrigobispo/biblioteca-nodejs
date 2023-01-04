import chalk from "chalk";
import fs from 'fs';
import exibeConteudoArquivo from "./index.js";
import listaValidada from "./http-validacao.js";

const caminhoDaLinhaDeComando = process.argv;

async function processaTexto(argumentos) {
    
    const caminho = argumentos[2];
    const valida = argumentos[3] === 'valida';

    try {
        fs.lstatSync(caminho);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(chalk.red('arquivo ou diretório inexistente.'))
            return;
        }
    }

    if (fs.lstatSync(caminho).isFile()) {

        imprimeListaDeLinks(caminho, valida);

    } else if (fs.lstatSync(caminho).isDirectory()) {

        const arquivos = await fs.promises.readdir(caminho);

        arquivos.forEach(async nomeDeArquivo => {
            imprimeListaDeLinks(`${caminho}/${nomeDeArquivo}`, valida);
        })
        console.log(arquivos);
    }
}

async function imprimeListaDeLinks(caminho, valida) {

    const resultado = await exibeConteudoArquivo(caminho);
    
    if (valida) {
        console.log(chalk.yellow('lista de links'), chalk.bgGreen(caminho), await listaValidada(resultado));
    } else {
        console.log(chalk.yellow('lista de links'), chalk.bgGreen(caminho), resultado);
    }
}

processaTexto(caminhoDaLinhaDeComando);
