const fs =require("fs")
const{getTodasPessoas,getIdpessoa,inserirPessoa,modificarPessoa,deletePessoa} = require("../servicos/principal")

function getPessoas(req , res){
   try {
      const pessoas = getTodasPessoas()
      res.send(pessoas)   
   }
    catch (error) {
      res.status(404)
      res.send(error.message)
   }   
 }

 function postPessoa(req,res){
    try {
      if(req.body.name){
        const pessoaNova = req.body
        inserirPessoa(pessoaNova)
        res.status(201)
        res.send("Inserido com sucesso") 
      }else{
        res.status(404)
        res.send("Campo Obrigatorio")

      }
     

    } catch (error) {
       res.status(404)
       res.send(erro, message)
       
    }  
  }

  function patchPessoas(req,res){
    try {
      const id =req.params.id
      const body = req.body
      modificarPessoa(body, id)

       res.send("Alterado com sucesso!")
    } 
    catch (error) {
       res.status(404)
       res.send(error, message) 
    }

}

    function deletePessoas(req, res){
        try {
          const id = req.params.id
          deletePessoa(id)
            res.send("deletado com sucesso")
        } 
        catch (error) {
            res.status(404)
            res.send(error, message)
        }
    }

    function getPessoa(req, res){
      try {
           const id = req.params.id
           if(id && Number(id) || id ){
            const pessoa = getIdpessoa(id) 
            res.send(pessoa)
           }else{
             res.send("id invalido")
           }
          
      } 
      catch (error) {
          res.status(404)
          res.send(error, message)
      }
  }
    
  

module.exports = {
    getPessoas,
    postPessoa,
    patchPessoas,
    deletePessoas,
    getPessoa,
}


