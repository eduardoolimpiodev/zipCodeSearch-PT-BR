
async function buscaEndereco(cep){
    let mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ''
    try {
    
        let consultarCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let consultarCEPConvertida = await consultarCEP.json();
        if (consultarCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }
           let cidade = document.getElementById('cidade')
           let logradouro = document.getElementById('endereco')
           let estado = document.getElementById('estado')
           let bairro = document.getElementById('bairro')

           cidade.value = consultarCEPConvertida.localidade
           logradouro.value = consultarCEPConvertida.logradouro
           estado.value = consultarCEPConvertida.uf
           bairro.value = consultarCEPConvertida.bairro 

           console.log(consultarCEPConvertida);
        return consultarCEPConvertida;
            console.log(consultarCEP)
        }   catch (erro) {
            mensagemErro.innerHTML = `<p>CEP inválido. Insira um cep existente!</p>`
            console.log(erro)
        }
    }

    let cep = document.getElementById('cep');
    cep.addEventListener("focusout", () => buscaEndereco(cep.value))


//fazer várias consultas ao mesmo tempo.
// let ceps = ['01001000', '01001001']
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas))
// buscaEndereco();






// .then(resposta => resposta.json())
// .then(resp => {
//     if(resp.erro) {
//         throw Error('Esse cep não existe! Corrija!')
//     } else
//         console.log(resp)
// })
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log('Processamento concluído!'))