// 1. desplegamos express
const express = require("express");
const app = express();

// 2. esta configuracion captara los datos de los formularios como un json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 3. configuramos dotenv
const dotenv = require("dotenv");
dotenv.config({ path: "./env/.env" });

// 4. configuramos la ruta de static(public)
app.use("", express.static("public"));
app.use("", express.static(__dirname + "/public"));

// 5. configuramos el motor de plantillas
app.set("view engine", "ejs");

// 6. Bcryptjs
const bcryptjs = require("bcryptjs");

// 7. variables de session(Express-session)
const session = require("express-session");
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}))

// 8. conexion mysql
const connection = require("./database/db");


app.get("/", (req, response) => {
  response.render("index");
});

app.listen(3000, (req, response) => {
  console.log("Ya deberia estar corriendo en el puerto http://localhost:3000");
});
