const express = require('express')
const app = express()
const port = 4000
//importar cors
const cors = require("cors");

require('dotenv').config()
const {dbConnection} = require("./database/config")

dbConnection()

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    mensaje: "Bienvenido a la API",
    autor: "Kevin Lozada",
    version: "1.0.0"
  })
})

//rutas de la API
app.use("/api/jugadores", require("./routers/jugadores.routes"))
app.use("/api/jugadores", require("./routers/jugadores.routes"))

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})


