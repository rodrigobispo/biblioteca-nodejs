# biblioteca-nodejs
Aplicação que captura links de um arquivo md (markdown); Construção de código a fim de ser usado como uma biblioteca/API.

* Utilizado node v12.22.9

### **Execução:**

* No diretório do projeto, executar o comando:
> node <nome-do-arquivo.js>
* Para execução do programa que lê o arquivo e extrai os links, no diretório do projeto, executar um dos comandos e visualizar resultados conforme implementação de código src/index.js :
> node src/cli.js ./arquivos/texto.md (texto que possui links)

> node src/cli.js ./arquivos/texto2.md (texto sem link)

Ou até mesmo passar o caminho do diretório que contém os arquivos, como os exemplos:
> node src/cli.js arquivos | node src/cli.js arquivos/ | node src/cli.js ./arquivos

Outra maneira de execução por script (definido no package.json):
> npm run cli \<caminho-da-pasta-ou-arquivo-direto\>

Informando uma flag de validação, "valida":
> npm run cli ./arquivos/texto.md -- valida

> npm run cli:valida

