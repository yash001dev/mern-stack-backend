const express=require('express');
const Category=require('../models/category');
const slugify=require('slugify');
const router=express.Router();

router.post('/category/create',(req,res)=>{
    const categoryObject={
        name:req.body.name,
        slug:slugify(req.body.name)
    }

    if(req.body.parentId){
        categoryObject.parentId=req.body.parentId
    }

    const cat=new Category(categoryObject);
    cat.save((error,category)=>{
        if(error) return res.status(400).json({error});
        if(category){
            return res.status(201).json({category});
        }
    });
});

module.exports=router;