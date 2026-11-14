
import express from "express"
import usuarioRoutes from "./routes/usuarioRoutes.js"

const app = express()

app.use(express.json())

// Registrar as rotas de usuários
app.use("/usuario", usuarioRoutes)

app.get("/", (req, res) => {
    res.json({
        "message": "Olá mundo!"
    })
})

app.listen(3000, () => {
    console.log("Servidor iniciado")
})