const fs = require("fs")

 function getTodasPessoas(){
      return JSON.parse(fs.readFileSync("pessoas.json"))
 }

 function inserirPessoa(pessoaNova){
    const pessoas = JSON.parse(fs.readFileSync("pessoas.json"))
    const novasPessoas = [... pessoas, pessoaNova]
    fs.writeFileSync("pessoas.json", JSON.stringify(novasPessoas))
}

function modificarPessoa(modificacoes,id){
    let bancoPessoas = JSON.parse(fs.readFileSync("pessoas.json"))
    const indiceModificado = bancoPessoas.findIndex( pessoa => pessoa.id == id)

    const conteudomudado = {...bancoPessoas[indiceModificado], ...modificacoes}
    bancoPessoas[indiceModificado] = conteudomudado
    fs.writeFileSync("pessoas.json",JSON.stringify((bancoPessoas)))
}

function deletePessoa(id){
    const bancoPessoas = JSON.parse(fs.readFileSync("pessoas.json"))
    const deletarPessoa = bancoPessoas.filter( pessoa => pessoa.id != id)
    fs.writeFileSync("pessoas.json",JSON.stringify((deletarPessoa)))
}

function getIdpessoa(id){
    const pessoas = JSON.parse(fs.readFileSync("pessoas.json"))
    const pessoasFiltradas = pessoas.filter( pessoa => pessoa.id ==id)[0]
    return pessoasFiltradas
}




 module.exports={
    getTodasPessoas,
    inserirPessoa,
    modificarPessoa,
    deletePessoa,
    getIdpessoa

 }