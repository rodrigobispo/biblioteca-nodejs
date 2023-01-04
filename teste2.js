import chalk from "chalk";

const texto = 'A interface File provê informações sobre arquivos e permite ao JavaScript a acessar seu conteúdo. São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.). [Teste de retorno 400](https://httpstat.us/404). [gatinho salsicha](http://gatinhosalsicha.com.br/)'

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    // const capturasDeMetodoString = texto.match(regex);
    const capturasDeMetodoString1 = [...texto.matchAll(regex)];
    // const capturasDeMetodoRegex = regex.exec(texto);
    // console.log(capturasDeMetodoString);
    console.log(capturasDeMetodoString1);
    // console.log(capturasDeMetodoRegex);

    console.log(chalk.red("TEXTO CAPTURADO APÓS EXECUÇÃO DE MAP: "));
    
    const resultados = capturasDeMetodoString1.map(captura => ({[captura[1]]: captura[2]}))
    console.log(resultados)
}

extraiLinks(texto);
