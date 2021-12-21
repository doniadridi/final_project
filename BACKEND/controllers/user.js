
const https = require('https');
const produits =require('../model/produit')
  
exports.ajoutproduits=async(req,res)=>{
  try {
    
  

  https.get("https://tech.dev.ats-digital.com/api/products?size=100", (resp) => {
    let data = "";

    resp.on("data", (chunk) => {
      data += chunk;
    });

   
    resp.on("end", () => {
      const products = JSON.parse(data).products;
      
      console.log("products :", products);
    });
  })
 
} catch (error) {
    console.log(error);
}
}

    exports.getproduits=async(req,res)=>{
       let Produits= produits.find({})
       try {
          res.send(200).status(Produits)
       } catch (error) {
         res.send(400).status(error)
       }
    }
   exports.getone_produits=async(req,res)=>{
     let id =req.params.id
    try {
      let Produits =produits.findById(id)
      res.status(200).send(Produits)
    } catch (error) {
      res.status(400).send(error)
    }
    }