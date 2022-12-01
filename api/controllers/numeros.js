import {db} from '../db.js'
import jwt from 'jsonwebtoken';

export const getNumeros = (req,res) =>{
    const q = "SELECT * FROM numeros";
    db.query(q, [], (err,data) =>{
        if(err) return res.status(500).json("query error")

        return res.status(200).json(data)
    })
}

export const addNumero = (req, res) =>{

    console.log('from controller')
    // TOKEN AUTHENTICATION
    const token = req.cookies.access_token;
    jwt.verify(token, "jwtkey", (err, userInfo) =>{
        if(!token) return res.status(403).json("Invalid token!");
    });

    // ADD NEW NUMERO TO DATABASE
    const q = "INSERT INTO numeros(`title`,`desc`,`img`,`date`,`data`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.img,
        req.body.date,
        req.body.data
    ];
    db.query(q,[values], (err, data) =>{
        if(err) return res.status(500).json("Query failed!")
        return res.status(200).json("Numeros added successfully!")       
    })
}

export const deleteNumero = (req, res) =>{

}