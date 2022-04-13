const express = require ("express");
const path = require ("path");

const app= express ();

app.use(express.static(path.resolve(__dirname, "./public")))

app.listen (process.env.PORT || 3000, function ()  {
    console.log ("Servidor corriendo en http://localhost:3030");
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/home.html"));
    
   })

app.get("/register", (req, res) => {
  res.sendFile(path.resolve (__dirname, "./views/register.html"));
 })
 app.post("/register", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/home.html"));
})
    

app.get("/login", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/login.html"));
   })
app.post("/login", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/home.html"));
})

app.get("/home", (req, res) => {
    res.sendFile(path.resolve (__dirname, "./views/home.html"));
   })
app.post("/home", (req, res) => {
    res.send ("Busqueda exitosa");
})
   