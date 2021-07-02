
const express = require('express');
const router = express.Router();
const Shirts = require('../../models/Shirts');

router.delete('/delete/:id', async (req,res)=>{
    try{
      
      const shirt = await Shirts.findByIdAndDelete(req.params.id);
      const shirts = await Shirts.find();
      const shirtss = {success:true,shirts}
      if(!shirt) throw Error('No shirt found!')
      res.status(200).json(shirtss)
     
    }
    catch(err){
      res.status(400).json({msg:'the shirt '+req.params.id+' does not exist'})
    }
  });
  module.exports = router;