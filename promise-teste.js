// Uma Promise podem estar "pendente" (pending) ou "resolvida" (settled).
// Os estados possíveis, uma vez que uma Promise está settled, são "concluída" (fulfilled) ou "rejeitada" (rejected).
// Após passar de pending para settled e se definir como fulfilled ou rejected, a Promise não muda mais de estado.

function promessa(bool) {
    const x = bool;
    return new Promise((resolve, reject) => {
        if (!x) {
            reject(new Error("falha na promessa"));
        }
        resolve("sucesso na promessa");
    });
}

function exibeResposta(textoResult) {
    console.log(textoResult);
}

promessa(true).then((texto) => exibeResposta(texto))
    // sucesso na promessa