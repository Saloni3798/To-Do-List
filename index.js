const express=require('express');
const app=express();
const port=00;
app.listen(port,function(err){
    if(err){
        console.log('Error',err);
    }
    console.log('server port:',port);
});