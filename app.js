const express = require("express")
const path = require("path")
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname,"./public")))
    
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})

app.get("/login",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"))
})

app.get("/register",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"))
})

app.listen(port, () => console.log(`Server in port ${port}`));

    