const express = require('express');
const router=express.Router()
const {getContacts}=require('../controllers/contactcontorlllers')
const {postContact}=require('../controllers/contactcontorlllers')
const {putContact}=require('../controllers/contactcontorlllers')
const {dltContact}=require('../controllers/contactcontorlllers')
const {getContact}=require('../controllers/contactcontorlllers')
router.route('/').get(getContacts).post(postContact)

router.route('/:id').put(putContact).delete(dltContact).get(getContact)



module.exports=router 