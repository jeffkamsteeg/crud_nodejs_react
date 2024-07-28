const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db  = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud_nodejs_react"
});

app.post("/create", (req, res)=>{
    const nombre = req.body.nombre;
    const edad = req.body.edad; // Cambiado de req.body.nombre a req.body.edad
    const pais = req.body.pais; // Cambiado de req.body.nombre a req.body.pais
    const cargo = req.body.cargo; // Cambiado de req.body.nombre a req.body.cargo
    const experiencia = req.body.anios; // Cambiado de req.body.nombre a req.body.anios

    db.query('INSERT INTO tbl_empleado(nombre_empleado, edad_empleado, pais_empleado, cargo_empleado, experiencia_empleado) VALUES (?, ?, ?, ?, ?)', 
        [nombre, edad, pais, cargo, experiencia],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error al registrar el empleado.");
            } else {
                res.send("Empleado registrado!");
            }
        }
    );
});

app.listen(3001, () => {
    console.log("Corriendo en el puerto 3001");
});