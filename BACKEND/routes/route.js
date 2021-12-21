const express =require('express');
const controller = require ('../controllers/user')

const route=express.Router();


route.get('getproduits',controller.getproduits);
route.get('getoneproduit/:id',controller.getone_produits);
module.exports=route;