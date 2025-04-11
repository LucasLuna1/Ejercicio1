const express = require('express');
const app = express();

app.use(express.json());

let productos = [];

app.post('/agregar', (req, res) => {
    const nuevoProducto = req.body;
    productos.push(nuevoProducto);
    res.status(201).json({
        mensaje: "Producto agregado con éxito",
        producto: nuevoProducto
    });
});

app.get('/listar', (req, res) => {
    res.status(200).json({ productos });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
