import {db} from '../db.js'
import jwt from "jsonwebtoken"

export const getArticles = (req, res)=>{
    const q = req.query.cat ? "SELECT * FROM articles WHERE cat=?" : "SELECT * FROM articles"
    db.query(q, [req.query.cat], (err,data) => {
        if(err) return res.send(err);

        return res.status(200).json(data);
    })
}
export const getArticle = (req, res)=>{
    const q = "SELECT a.id, `username`, `title`, `desc`, a.img, u.img AS userImage,`cat`, `date` FROM users u JOIN articles a ON u.id = a.uid WHERE a.id = ?";
    db.query(q, [req.params.id], (err,data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data[0])
    })
}
export const addArticle= (req, res)=>{
    // Check the token 
    const token = req.cookies.access_token;
    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if(!token) return res.status(403).json("Token is not valid");

        // also try to post
        const q = "INSERT INTO articles(`title`, `desc`,`img`, `cat`,`date`, `uid`) VALUES (?) ";
        const values = [
            req.body.title,
            req.body.desc,
            req.body.img,
            req.body.cat,
            req.body.date,
            userInfo.id
        ]
        db.query(q, [values], (err, data) => {
            if(err) return res.status(500).json(err)
            return res.status(200).json("Article added successfully!")
        })        
    })
}
export const deleteArticle = (req, res)=>{
    // allow to delete only if the user is connected and his id match with article uid
    const token = req.cookies.access_token
    if(!token) return res.status(401).json('Not authenticated')
    // Check for valid token
    jwt.verify(token, "jwtkey", (err, userInfo)=>{
        if(err) return res.status(403).json("Token is invalid")

        // no error delete the post
        const articleId = req.params.id
        
        const q = "DELETE FROM articles WHERE id = ? AND uid = ?";
        db.query(q,[articleId, userInfo.id], (err,data)=>{
            if(err) return res.status(403).json("You cant delete only your articles!" + articleId + userInfo.id)

            return res.json("Article has been successfully deleted!")
        })
    })
}
export const updateArticle = (req, res)=>{
    // Check the token 
    const token = req.cookies.access_token;
    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if(!token) return res.status(403).json("Token is not valid");
        // also try to post

        // get the article ID 
        const articleId = req.params.id

        const q = "UPDATE articles SET `title`=?, `desc`=?,`img`=?, `cat`=? WHERE id=? AND uid=? ";
        const values = [
            req.body.title,
            req.body.desc,
            req.body.img,
            req.body.cat
        ]
        db.query(q, [...values, articleId, userInfo.id], (err, data) => {
            if(err) return res.status(500).json(err)
            return res.status(200).json("Article updated successfully!")
        })
    })


}