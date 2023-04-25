const express = require("express")
const rotaPrincipal = require("./rotas/principal")
const app = express()
app.use(express.json())

const port = 5000

app.use("/telaprincipal", rotaPrincipal)

 app.listen(port, () => {
     console.log(`escutando a porta ${port}`)

 })