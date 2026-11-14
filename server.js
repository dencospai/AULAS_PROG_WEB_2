
import express from "express"

const app = express()

app.use(express.json()) //aplicação entender requisições e enviar respostas em json

// GET - Rota principal
app.get("/", (req, res) => {
    return res.send("Olá Mundo!")
})

// Iniciar servidor
app.listen(3000, () => {
    console.log("Servidor iniciado")
})
