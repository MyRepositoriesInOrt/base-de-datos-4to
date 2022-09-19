const menu = require('./menu.json');
const express = require('express'); //llamamos express
const app = express(); //guardamos lo que devuelve
const port = 9000; //port 3000 es para front y 9000 para back
app.use(express.json())

app.listen(port, () => {
    console.log(`> Server running on port ${port}`);
});

// Ejercicio 1
app.get('/menu', (req, res) => {
    res.json(menu);
});

// Ejercicio 2
app.get('/menu/:id', (req, res) => {
    const id = req.params.id;
    res.send(menu.find(x => x.id==id));
});

// Ejercicio 3
app.get('/principales', (req, res) => {
    res.send(menu.filter(x => x.tipo=='principal'));
});

// Ejercicio 4
app.get('/postres', (req, res) => {
    res.send(menu.filter(x => x.tipo=='postre'));
});

// Ejercicio 5
app.get('/bebidas', (req, res) => {
    res.send(menu.filter(x => x.tipo=='bebida'));
});

// Ejercicio 6
app.post('/pedido', (req, res) => {
    const initialValue = 0;
    const precio = arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])

    // const precios = []
    // const cant = []
    // req.map(item => platos.push(menu.find(item.id).precio));
    // req.map(item => cant.push(item.cantidad));

    res.json({
        msg: 'Pedido recibido',
        precio: precio
    });
});