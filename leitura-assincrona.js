import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// modo assíncrono
// https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar

// uso de then
// function exibeConteudoArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then(texto => console.log(chalk.green(texto)))
//         .catch(trataErro)
// }

// uso de async/await 
async function exibeConteudoArquivo(caminhoDoArquivo) {
    try {        
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto));
    } catch (error) {
        trataErro(error);
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }
}

exibeConteudoArquivo('./arquivos/texto.md');
exibeConteudoArquivo('./arquivos/');

// Uma Promise podem estar "pendente" (pending) ou "resolvida" (settled).
// Os estados possíveis, uma vez que uma Promise está settled, são "concluída" (fulfilled) ou "rejeitada" (rejected).
// Após passar de pending para settled e se definir como fulfilled ou rejected, a Promise não muda mais de estado.
