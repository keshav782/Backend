const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI, {
//             useUnifiedTopology: true,

const mongoURL = 'mongodb://localhost:27017/hotels'; //replace with your database url or hotels name can change to your collection name
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;

// define event listener for database connection

db.on('connected',()=>{
    console.log("connected successfully");
})

db.on('error',(err)=>{
    console.log(err);
})
db.on('disconnected',()=>{
    console.log('database disconnected');
})

module.exports=db;