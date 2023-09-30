const mongoose = require('mongoose');
const { Schema } = mongoose;
 

const notesSchema = new Schema({
  title:{
    type:string,
    required:true
  },
  description:{
    type:string,
    required:true
  },
  tag:{
    type:string,
    default:"general"
  },
  date:{
    type:date,
    default:Date.now
  }
});
module.exports =mongoose.model('Notes',notesSchema);