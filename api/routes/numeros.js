import express from "express"
import { getNumeros,addNumero, deleteNumero} from "../controllers/numeros.js"
import { db } from "../db.js"


const router = express.Router()

// Several routes
router.get('/',getNumeros)
router.post('/',addNumero)
router.delete('/:id',deleteNumero)

export default router