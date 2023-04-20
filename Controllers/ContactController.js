
const Contact = require("../models/contactModel")

const getAllContact = async (req,resp)=>{
    const contacts =await Contact.find()
    resp.status(200).send(contacts)
}

const getContact = async (req,resp)=>{
    resp.status(200).json("get contacts")
}

const postContact =  async (req,resp)=>{
    const {name , email}= req.body
    console.log(req.body)
    if(!name || !email){
        resp.status(400)
        throw new Error("provide all datas")
    }
    const postContact = await Contact.create({
        name,
        email
    })
    resp.status(200).json(postContact)
}
const updateContact = async (req,resp)=>{
    const contact =await Contact.findById(req.params.id)
    if(!contact){
        resp.status(404)
        throw new Error("not found");
    }
    const updatedContact =await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new : true}
        )
    resp.status(200).json(updatedContact)
}
const deleteContact = async (req,resp)=>{
    const contact =await Contact.findById(req.params.id)
    if(!contact){
        resp.status(404)
        throw new Error("Contact not found");
    }
    await Contact.deleteOne()
    resp.status(200).json(contact)
}

module.exports = {getAllContact,getContact,updateContact,postContact,deleteContact}