import {db} from "../db.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const register = (req, res) => {
    // Check existing user
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"
    db.query(q, [req.body.email, req.body.name], (err, data) =>{
        // check if there is an error and return if it exists
        if(err) return res.json(err)
        // check if data already exists and return 409 status if it exists
        if( data.length) return res.status(409).json("username already in use")
        
        // Before adding user we have to hash the password 
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        // Now insert the password
        const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ]
        db.query(q, [values], (err, data) => {
            if(err) return res.json(err)
            // if no error return sucess 
            return res.status(200).json("username has been created")

        })
    })
}
export const login = (req, res) => {
    // Check if user exists
    const q = "SELECT * FROM users WHERE username = ?";

    db.query(q, [req.body.username], (err, data) =>{
        // Check if there is an error
        if(err) return res.status(500).json(err)
        console.log(req.body.username)
        if(data.length === 0) return res.status(404).json("User not found")

        // if user exists check for password
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password); // return true if password is correct
        if(!isPasswordCorrect) return res.status(400).json("Incorrect password or username!")
        
        // Create token
        const token = jwt.sign({id:data[0].id},"jwtkey");
        const {password, ...other} = data[0]
        res.cookie("access_token", token, {
            httpOnly:true
        }).status(200).json(other)
    })
}
export const logout = (req, res) => {
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true,

    }).status(200).json("User has been logged out")
}