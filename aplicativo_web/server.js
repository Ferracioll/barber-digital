const express = require('express')

class Server
{

    app
    porta
    constructor(porta)
    {
        this.app = express()
        this.porta = porta     
    }

    listen()
    {
        this.app.listen(this.porta, () => {
            console.log("Servidor Online...")
        })
    }

}

module.exports = new Server(3000)