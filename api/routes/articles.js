import express from "express"
import { getArticles, getArticle, updateArticle, deleteArticle, addArticle } from "../controllers/articles.js"


const router = express.Router()

// Several routes
router.get('/',getArticles)
router.get('/:id',getArticle)
router.post('/',addArticle)
router.delete('/:id',deleteArticle)
router.put('/:id',updateArticle)

export default router