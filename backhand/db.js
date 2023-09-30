const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const mongoURI="mongodb://0.0.0.0:27017/newinotebook"

const connectToMongo=()=>{
    mongoose.connect(mongoURI)
    .then(()=>{
        console.log('connected');
    })
    // .catch(()=>{
    //     console.log('error');
    // })
}   

// const userSchema = new mongoose.Schema({
//     name:{
//       type:String,
//       required:true
//     // },
//     // password:{
//     //   type:String,
//     //   required:true
//     // },
//     // email:{
//     //   type:String,
//     //   required:true,
//     //   unique:true
//     // },
//     // date:{
//     //   type:Date,
//     //   default:Date.now
//     }
//   });
//   const collection=new mongoose.model('tut',userSchema);
//   data ={
//     name:"hugh"
//   }
//   collection.insertMany([data])
  module.exports=connectToMongo;
