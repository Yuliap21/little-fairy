require('dotenv').config()
const express = require('express');
const app = express();
const PORT = 3000;
const Product = require('./models/product')

/*******
Database Setup
******/
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
mongoose.connection.once('open', () =>{
  console.log('connected to mongo')
})


app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use((req, res, next) =>{
  console.log('***********************')
  console.log('***********Middleware checking in*******')
  console.log('I run before all routes')
  console.log('***********************')
  next()
})



app.use(express.urlencoded({ extended: true }))
/*****************
INDUCES Routes
******************/

/*
Index
*/
app.get('/products/', (req, res) => {
  Products.find({}, (err, foundproducts)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Index', {
        product: foundProducts
      })
    }
  })
})
/*
New
*/
app.get('/products/new', (req, res) =>{
  res.render('New')
})

/*
Delete
*/
/*
Update
*/

/*
Create
*/
app.post('/products', (req, res) =>{
  if(req.body.smell === 'on'){
    req.body.smell = true;
  } else {
    req.body.smell = false;
  }
  Product.create(req.body, (err, createdProduct ) => {
    if(err){
      res.status(404).send({
        msg: err.message
      })
    } else {
      console.log(createdProduct);
      res.redirect('/products')
    }
  })
})
/*
Edit
*/


/*
Show
*/
app.get('/products/:id', (req, res) => {
  Product.findById(req.params.id, (err, foundProduct)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Index', {
        product: foundProduct
      })
    }
  })
})


app.listen(PORT, () => {
  console.log('We in the building', PORT)
})
