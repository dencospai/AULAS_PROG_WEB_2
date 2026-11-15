import { Router } from "express";
import { listarUsuario, cadastrarUsuario, atualizarTodoUsuario, atualizarParteUsuario, deletarUsuario, buscarIndice } from "../controllers/usuarioControllers.js"; 

const router = Router();


// GET - Listar todos os usuários
router.get("/", listarUsuario )

// POST - Cadastrar usuário
router.post("/", cadastrarUsuario)

// PUT - Atualizar todos os dados do usuário
router.put("/:indice", atualizarTodoUsuario)

// PATCH - Atualizar parcialmente o usuário
router.patch("/:indice", atualizarParteUsuario)

// DELETE - Excluir usuário
router.delete("/:indice", deletarUsuario)

// GET - Buscar usuário pelo índice
router.get("/:indice", buscarIndice)

export default router;