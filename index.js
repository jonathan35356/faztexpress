const express = require("express");

const app = express();

app.get("/productos", (req, res) => {
  const { category, price } = req.query;
  res.send(`Categoría: ${category}, Precio: ${price}`);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Abrimos en el puerto ${port}`);
});

//app use sirve para redireccionar todas los endpoints si no
// app.use((req,res,next)  => {
//    res.send(`metodo que se manda ${req.method} - url enviada ${req.url}`);
//    next()
//  })

//ejemplo usando los req params
//  app.get('/users/:userId/:books', (req,res)=> {
//     res.send(`User id: ${req.params.userId} books ${req.params.books}`)
//  })
