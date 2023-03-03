const express = require('express')
const format = require('date-format')

const app = express()

const PORT = 4000 || process.env.PORT

app.get('/', (req, res)=>{
    res.status(201).send('<h1>Hello world </h1>')
})

app.get("/api/v1/instagram", (req, res) => {

    /* const date = new Date()
     const mdate = date.toLocaleDateString("en-US") */

    const instaData = {
        userName: "Nilesh-instagram",
        follewers: 40,
        follows : 48,
        date: format.asString("dd:MM:yy - hh:mm:ss", new Date()),
        
    }
   
    res.json({instaData})

})

app.get("/api/v1/facebook", (req, res) => {
    const fbData = {
        userName: "Nilesh-facebook",
        follewers: 40,
        follows : 48,

    }
    res.json({fbData})

})

app.get("/api/v1/linkedin", (req, res) => {
    const linkedinData = {
        userName: "Nilesh-linkedin",
        follewers: 40,
        follows : 48,
        date: format.asString("dd:MM:yy - hh:mm:ss", new Date()),
    }

    res.json({linkedinData})
    
}
)

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);
})

