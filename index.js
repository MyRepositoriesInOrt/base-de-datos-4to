const express = require("express"); //llamamos express
const app = express(); //guardamos lo que devuelve
const port = 9000; //port 3000 es para front y 9000 para back

app.get("/", (req, res) => {  //si se llama a esta ruta se activa la función. Esta tiene el req, que de haber datos pasados serán eso, y el res, la respuesta que mandamos
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`> Server running on port ${port}`);
});