require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Products = require('./models/product')

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



app.use(express.urlencoded({ extended: true })) // Without this half my code wont work because i need req.body
/****
Dummy Code
For now
*****/
app.post('/products', (req, res) => {
  console.log('Create route accessed')
  console.log('req.body is', req.body)
  res.send(req.body)
})
/****
End Dummy Code
*****/

/***
SEED ROUTE
****/
app.get('/products/seed', (req, res) => {
  Products.create([
    {
            name:'hand cream',
            color:'pink',
            smell: 'true',
            description: 'soft hand cream for little lady',
            img:"https://api.planetazdorovo.ru/upload/Photo_Tovar/18842803.jpg",
            price:"$69",
            qty:"50"


        },
        {
          name:'lip balm',
          color:'caramel',
          smell: 'true',
          description: 'sweet caramel taste for every lady',
          img:"https://st51.stblizko.ru/images/product/454/504/120_original.jpg",
          price:"$108",
          qty:"30"
        },
        {
          name:'shampoo',
          color:'clear',
          smell: 'true',
          description: 'helps to create long and healthy hair for little princess',
          img:"https://cdn1.ozone.ru/s3/multimedia-a/wc1200/6015003622.jpg",
          price:"$98",
          qty:"70"
        }
  ], (err, data) => {
    res.redirect('/products')
  })
});





/*****************
INDUCES Routes
******************/

/*
Index
*/
app.get('/products/', (req, res) => {
  Products.find({}, (err, foundProducts)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Index', {
        products: foundProducts
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
  Products.findById(req.params.id, (err, foundProduct)=>{
    if(err){
      res.status(404).send({
          msg: err.message
      })
    } else {
      res.render('Show', {
        product: foundProduct
      })
    }
  })
})


app.listen(PORT, () => {
  console.log('We in the building', PORT)
})
