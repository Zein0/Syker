
const express = require('express');
const router = express.Router();
const Shirts = require('../../models/Shirts');


router.get('/test', (req, res) => {

    try{
       
        res.status(200).json('ok.');

    }
    catch(err){
        res.status(400).json({msg:err})
    }
    
  });
  

  module.exports = router;