
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let products = [];
let orders = [];

// Admin login (simple)
app.post('/login', (req,res)=>{
  const {username, password} = req.body;
  if(username === 'admin' && password === 'admin123'){
    res.json({success:true});
  } else {
    res.json({success:false});
  }
});

// Products
app.get('/products', (req,res)=> res.json(products));
app.post('/products', (req,res)=>{
  products.push(req.body);
  res.json({message:'Product added'});
});

// Orders
app.post('/order', (req,res)=>{
  orders.push(req.body);
  res.json({message:'Order placed'});
});

app.get('/orders', (req,res)=> res.json(orders));

app.listen(5000, ()=> console.log('Server running on 5000'));
