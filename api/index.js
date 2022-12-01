import express from "express"
import articlesRoute from "./routes/articles.js"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import contactRoute from "./routes/contact.js"
import numerosRoute from "./routes/numeros.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import multer from 'multer'



const app = express()
app.use(cors())

app.use(express.json())
app.use(cookieParser())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage })

app.post('/api/upload', upload.single('file'), function (req, res) {
  const file = req.file
  res.status(200).json(file.filename)
})


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/api/articles", articlesRoute)
app.use("/api/users", usersRoute)
app.use("/api/auth", authRoute)
app.use("/api/numeros", numerosRoute)
app.use("/api/contact", contactRoute)

app.listen(8800, ()=>{
    console.log("connected")
})