import Express  from "express";
import  ExpressHandlebars  from "express-handlebars";
import multer from "multer";
import database from "./database.js"

const app = Express ()
const PUERTO = 8080

app.use(Express.json())
app.use(Express.urlencoded({extended:true}))
app.use(Express.static("./src/public"))

app.get ("/", (req, res) => { 
    res.send ("conectados")
})

app.listen(PUERTO, () => {
    console.log (`Servidor escuchando en http://localhost:${PUERTO}`)
})
