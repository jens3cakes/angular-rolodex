const express = require('express');
const router = express.Router();
const Contact = require('../db/Models/Contact');

router.get('/', (req, res)=>{
  return new Contact()
  .fetchAll({
    require: true,
    withRelated: ['user_id']
  })
  .then(contacts => {
    const contactsObj = contacts.serialize();
    return res.json(contactsObj)
  })
  .catch((err)=>{
    return res.status(500),json({message: err.message})
  })
})
module.exports = router;