const express = require('express')
const router = require('./mvc/routes/Config')
class Server
{

    app
    porta
    constructor(porta)
    {
        this.app = express()
        this.porta = porta   
        this.app.use(router)
        this.app.set("view engine", "ejs")
        this.app.set("views", "mvc/views")
    }

    listen()
    {
        this.app.listen(this.porta, () => {
            console.log("Servidor Online...")
        })
    }

}

module.exports = new Server(3000)