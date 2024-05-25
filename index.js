const express = require('express');
const app = express();
const db = require('./db');
const Person = require('./models/Person');
const MenuItem =  require('./models/Menu');
const bodyparser = require('body-parser');
app.use(bodyparser.json());
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello World');
})

// for Person Router

const personroutes = require('./routes/personroutes');

app.use('/person',personroutes);

// for menu router

const menuroutes = require('./routes/menuroutes');
app.use('/menu',menuroutes)



// app.post('/person', async (req,res)=>{

//     try{
//         const data = req.body;

//         const newPerson = new Person(data);
//         const response = await newPerson.save()
//         console.log('data svaed');
//         res.status(200).json(response);
//     }
//     catch(err){
//             console.log(err);
//             res.status(500).json({message:'something went wrong'})
//     }

    
// })

// app.get('/person', async (req,res)=>{

//     try{
//             const data = await Person.findOne({age:{$lte: 25}});
//             console.log("sucessfully");
//             res.status(200).json(data);
//     }
//     catch(err){
//             console.log(err);
//             res.status(500).json({message:'something went wrong'})
//     }
// })


// app.post('/menu', async (req,res)=>{
//     try{
//         const data = req.body;

//         const newMenuItem = new MenuItem(data);
//         const response = await newMenuItem.save();
//         console.log("menu saved");
//         res.status(200).json(response);
//     }
//     catch(err)
//     {
//         console.log(err);
//         res.status(500).json({message:"server error"})
//     }
// })


// app.get('/menu', async (req,res)=>{

//     try{
//         const data = await MenuItem.find();
//         console.log("sucessfully");
//         res.status(200).json(data);
//     }
//     catch(err)
//     {
//         console.log("error",err);
//         res.status(500).json({message:"server error"})
//     }
// })


// app.get('/person/:work', async (req,res)=>{

//     const work = req.params.work;
//     try{
//         if(work ==='chef' || work ==='waiter' || work ==='manager'){
        
//                 const response = await Person.find({work:work});
//                 res.status(200).json(response);
//         }
//         else
//         {
//             res.status(404).json({error:"invalid work type"});
//         }
//     }
//     catch(error)
//     {
//         console.log(error);
//         res.status(500).json({message:"intenal server error"})
//     }
    
// })

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

