const mongoose=require('mongoose');

mongoose.set('strictQuery',true);
mongoose.connect('mongodb://localhost:27017/blogApp',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
},(err)=>{
    if(err){
        console.log('Connection has ended with error',err);
    }
    else{
        console.log('Connection is successful');
    }
});
module.exports=mongoose;