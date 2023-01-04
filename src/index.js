import fs from 'fs';
import chalk from "chalk";

function extraiLinks(texto, caminho) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}));
    
    return resultados.length !== 0 ? resultados : `não possui link no arquivo ${caminho}`;
}

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

async function exibeConteudoArquivo(caminhoDoArquivo) {
    try {        
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(texto, caminhoDoArquivo);
    } catch (error) {
        trataErro(error);
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }
}

export default exibeConteudoArquivo;
