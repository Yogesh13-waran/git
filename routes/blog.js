const router = require('express').Router();
const Blog = require('../models/Blog')
const bodyparser=require("body-parser")

// Your routing code goes here
router.use(bodyparser())

router.get('/blog', async (req,res)=>{
    try{
let data=0

        let lim=0
        if(req.query.page){
            lim=Number((req.query.page-1))*5

        data=await Blog.find({
     topic:req.query.search
}).limit(5).skip(lim);}
else{
     data=await Blog.find()
}
    res.json({
        "status":"success",
        "result":data})}
        
    catch(e){
        res.json({
      status:"failed",
      message:e.message
        })}
        
})

router.post('/blog', async (req,res)=>{
    try{
    const blog=await Blog.create(req.body)
    res.json({
        "status":"success",
        
        "result":blog})}
    catch(e){
        res.json({
      status:"failed",
      message:e.message
        })}
})
router.put('/blog/:id', async (req,res)=>{
    try{
    await Blog.updateOne({_id:req.params.id},
       /* topic:req.body.topic,
        description:req.description,
        posted_at:req.body.posted_at,
        posted_by:req.body.posted_by*/

    req.body)
    const blog=await Blog.findOne({_id:req.params.id})
    res.json({
        "status":"success",
        
        "result":blog})}
    catch(e){
        res.json({
      status:"failed",
      message:e.message
        })}
})
router.delete('/blog/:id', async (req,res)=>{
    try{
    const blog=await Blog.deleteOne({_id:req.params.id})
    res.json({
        "status":"success",
        
        "result":blog})}
    catch(e){
        res.json({
      status:"failed",
      message:e.message
        })}
})
module.exports = router;