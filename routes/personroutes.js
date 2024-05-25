const express =  require('express');
const router = express.Router();
const Person = require('../models/Person');


router.post('/', async (req,res)=>{

    try{
        const data = req.body;

        const newPerson = new Person(data);
        const response = await newPerson.save()
        console.log('data svaed');
        res.status(200).json(response);
    }
    catch(err){
            console.log(err);
            res.status(500).json({message:'something went wrong'})
    }

    
})

router.get('/', async (req,res)=>{

    try{
            const data = await Person.findOne({age:{$lte: 25}});
            console.log("sucessfully");
            res.status(200).json(data);
    }
    catch(err){
            console.log(err);
            res.status(500).json({message:'something went wrong'})
    }
})
router.get('/:work', async (req,res)=>{

    const work = req.params.work;
    try{
        if(work ==='chef' || work ==='waiter' || work ==='manager'){
        
                const response = await Person.find({work:work});
                res.status(200).json(response);
        }
        else
        {
            res.status(404).json({error:"invalid work type"});
        }
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({message:"intenal server error"})
    }
    
})

router.put('/:id', async (req,res)=>{
    try{
            const personId = req.params.id;
            const data = req.body;
            const response = await Person.findByIdAndUpdate(personId,data,{
                new:true,  //Retuen the updated document
                runValidators:true
            });
            
            if(!response)
                {
                    return res.status(404).json({error:"person not found"});
                }
            console.log("updated successfylly");
            res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"intenal server error"})
    }
})

router.delete('/:id', async (req,res)=>{
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if(!response)
            {
                return res.status(404).json({error:"person not found"});
            }
        console.log("deleted successfully");
        res.status(200).json({message:"deleted successfully"});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"intenal server error"})
    }
})
module.exports = router;