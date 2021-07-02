
const express = require('express');
const router = express.Router();
const Shirts = require('../../models/Shirts');


router.post('/add', async (req,res)=>{
    
    try {
        const newShirts = new Shirts({
            shirt: req.body.shirt,
            size: req.body.size 
           
        });
         newShirts  = await newShirts.save()
        res.status(201).json(newShirts)
    } catch(err){
        res.status(400).json({message: err.message })

    }
});
router.get('/read', async (req,res) => {
    try{
        const posts= await Shirts.find();
        if(!posts) throw Error('No Shirts');
        res.status(200).json(posts);

    }
    catch(err){
        res.status(400).json({msg:err})
    }
})

module.exports = router;