const {PORT} = require('./config/serverConfig.js')
const express = require('express')

const setupAndstartServer=()=>{
    const app = express()
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.listen(PORT,()=>{
        console.log(`Server is running on port no: ${PORT}`)
    })
}

setupAndstartServer()