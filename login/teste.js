const fs = require("fs");
 const dadosAtuais = JSON.parse(fs.readFileSync("pessoas.json"));
 const novosDados =  { id: 3, nome: 'Thais', fone: 9922792 }
fs.writeFileSync("pessoas.json",  JSON.stringify([...dadosAtuais, novosDados]))

console.log(JSON.parse(fs.readFileSync("pessoas.json")))