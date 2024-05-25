const express =  require('express');
const router  =  express.Router();
const MenuItem =  require('../models/Menu');
const { route } = require('./personroutes');

router.post('/', async (req,res)=>{
    try{
        const data = req.body;

        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save();
        console.log("menu saved");
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({message:"server error"})
    }
})

router.get('/', async (req,res)=>{

    try{
        const data = await MenuItem.find();
        console.log("sucessfully");
        res.status(200).json(data);
    }
    catch(err)
    {
        console.log("error",err);
        res.status(500).json({message:"server error"})
    }
})

router.get('/:taste', async (req,res)=>{
    try{
            const taste = req.params.taste;

            if(taste==='sweet'||taste==='spice'||taste==='sour'){
                const response  = await MenuItem.find({taste:taste});
                res.status(200).json(response);
            }
            else
            {
                res.status(404).json({error:"invalid work type"});
            }
    }
    catch(err){
        console.log("error",err);
        res.status(500).json({mess:"internal server error"})
    }
})

module.exports=router;