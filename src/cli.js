import chalk from "chalk";
import fs from 'fs';
import exibeConteudoArquivo from "./index.js";

const caminhoDaLinhaDeComando = process.argv;

async function processaTexto(argumentos) {
    
    const caminho = argumentos[2];

    try {
        fs.lstatSync(caminho);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(chalk.red('arquivo ou diretório inexistente.'))
            return;
        }
    }

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
    console.log(chalk.yellow('lista de links'), chalk.bgGreen(caminho), resultado);
}

processaTexto(caminhoDaLinhaDeComando);
