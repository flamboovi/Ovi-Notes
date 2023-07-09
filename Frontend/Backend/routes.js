const express=require('express');
const router=express.Router();

const mongoType= require('mongoose').Types;

const Post=require('../Backend/Models/Post.js');

//routes define here
//get All data from this API
router.get('/',(req,res)=>{
    Post.find((err,doc)=>{
        if(err){
            console.log('Error occurs while fetching data'+ err);
            res.status(400).send('Internal Error',err);
        }
        else{
            res.send(doc);
        }
    })
})

//Create new post
router.post('/',(req,res)=>{
    let post=new Post({
        title: req.body.title,
        content:req.body.content,
        username:req.body.username,

    })
    post.save((err,doc)=>{
        if(err){
            console.log('Internal Error'+err);
            res.status(400).send('Interal error',err);
        }
        else{
            res.send(doc);
        }
    })
})

//Get Data by id

router.get('/:id',(req,res)=>{
    if(mongoType.ObjectId.isValid(req.params.id)){
        Post.findById(req.params.id,(err,doc)=>{
            if(err){
                console.log('Internal Error'+err);
                res.status(400).send('Internal error: '+err);
            }
            else{
                res.send(doc);
            }
        })
    }
    else{
        res.status(400).send('No record found by this id: '+ id);
    }
})

//delete data by Id

router.delete('/:id',(req,res)=>{
    if(mongoType.ObjectId.isValid(req.params.id)){
        Post.findByIdAndRemove(req.params.id,(err,doc)=>{
            if(err){
                console.log('Internal Error'+err);
                res.status(400).send('Internal error: '+err);
            }
            else{
                res.send(doc);
            }
        })
    }
    else{
        res.status(400).send('No record found by this id: '+ id);
    }
})

//Update by Id

router.put('/:id',(req,res)=>{
    let post={
        title: req.body.title,
        content:req.body.content,
        username:req.body.username,

    }
    if(mongoType.ObjectId.isValid(req.params.id)){
        Post.findByIdAndUpdate(req.params.id,{$set:post},{new:true},(err,doc)=>{
            if(err){
                console.log('Internal Error'+err);
                res.status(400).send('Internal error: '+err);
            }
            else{
                res.send(doc);
            }
        })
    }
    else{
        res.status(400).send('No record found by this id: '+ id);
    }
});

module.exports= router;