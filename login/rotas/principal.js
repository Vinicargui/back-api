 const {Router} = require("express")
 const {getPessoas,postPessoa, patchPessoas, deletePessoas,getPessoa} = require("../controladores/principal")

 const router = Router()

 router.get("/", getPessoas)

 router.post("/",postPessoa)

 router.patch("/:id",patchPessoas)

 router.delete("/:id", deletePessoas)

 router.get('/:id', getPessoa)

 module.exports = router


