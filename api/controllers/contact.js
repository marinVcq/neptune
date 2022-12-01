import { db } from "../db.js";
import nodemailer from 'nodemailer';

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: "marinos29200@gmail.com",
        pass: "fzhqdwmbnxqjafpw",
    },
})

contactEmail.verify((err) => {
    if(err) return console.log(err)

    //return console.log("Ready to send email mister!")
})

export const postMessage = (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const mail = {
        from: name,
        to: "marinos29200@gmail.com",
        subject: "Contact Form Submission",
        html: `<p>Nom: ${name}</p>
                <p>Adresse Mail: ${email}</p>
                <p>Message: ${message}</p>`
    }
    contactEmail.sendMail(mail, (error) =>{
        if(error) return res.status(550).json(error)

        return res.status(200).json("message successfully sent!")
    })
}