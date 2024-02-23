const asyncHandler=require("express-async-handler")
const contact=require('../models/contactModel')


const getContacts=asyncHandler(async(req,res)=>{
    const Contact=await contact.find()
    res.status(200).json(Contact)
})

const getContact=asyncHandler(async(req,res)=>{
    const Contact=await contact.findById(req.params.id)
    if(!Contact){
        res.status(404)
        throw new Error("contact not found")
    }
    res.status(200).json(Contact)
})

const postContact=asyncHandler(async(req,res)=>{
   
    // console.log("this is post body ",req.body);
const {name,email,phone}=req.body
if(!name||!email||!phone){
res.status(400)
 throw new Error('all fields are Mandotory')

}
const Contact=await contact.create({
    name,email,phone
})
res.status(201).json(Contact)
})

const putContact=asyncHandler(async(req,res)=>{
    const Contact=await contact.findById(req.params.id)
    if(!Contact){
        res.status(404)
        throw new Error("contact not found")
    }
    const updateContact=await contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updateContact)
})

const dltContact=asyncHandler(async(req,res)=>{
    const Contact=await contact.findById(req.params.id)
    if(!Contact){
        res.status(404)
        throw new Error("contact not found")
    }
//   await contact.remove()
await contact.deleteOne({ _id: req.params.id });
    // res.status(200).json({message:`Delete contact for  ${req.params.id}`})
    res.status(200).json(Contact)
})
module.exports={getContact,dltContact,putContact,postContact,getContacts}