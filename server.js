const express = require('express');
const app = express();
const PORT = 3000;
const products = require('./models/product')

/*****************
INDUCES Routes
******************/
/*
Index
*/
app.get('/products', (req, res) =>{
  res.send(products)
})
/*
New
*/
/*
Delete
*/
/*
Update
*/
/*
Create
*/
/*
Edit
*/
/*
Show
*/
app.get('/products/:indexOfProductsArray', (req, res) =>{
  const nextProductNumber = parseInt(req.params.indexOfProductsArray) + 1
  res.send(`<h1>The product you are looking for is ${products[req.params.indexOfProductsArray].name}</h1><a href= "/products/${nextProductNumber}"> Next product is${products[nextProductNumber].name}</a>`)
  res.send(products[req.params.indexOfProductsArray])
})


app.listen(PORT, () => {
  console.log('We in the building', PORT)
})
