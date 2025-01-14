const express = require('express');
const cors = require('cors');
const products = require('./products.json');

const app = express();
const PORT = 3001;


app.use(cors()); 
app.use(express.json()); 


app.get('/api/products', (req, res) => {
    res.json(products);
});


app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Produto não encontrado' });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
