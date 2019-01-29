const express = require('express');
const router = express.Router();
const Contact = require('../db/Models/Contact');
const TypeOfBusiness = require('../db/Models/TypeOfBusiness')
const TypeOfContact = require('../db/Models/TypeOfContact')
router.get('/', (req, res)=>{
  return new Contact()
  .fetchAll({
    require: true,
    withRelated: ['user_id', 'type_of_business_id', 'type_of_contact_id']
  })
  .then(contacts => {
    const contactsObj = contacts.serialize();
    return res.json(contactsObj)
  })
  .catch((err)=>{
    return res.status(500),json({message: err.message})
  })
})

router.post('/', (req, res)=>{
  let { user_id, first_name, last_name, personal_email, work_email, company_name, work_number, work_number_extension, work_cell_number, work_street_address, work_state_address, work_country_address, personal_cellphone_number, home_phone_number, home_street_address, home_state_address, home_country_address, type_of_business, type_of_contact, notes } = req.body;
  console.log('hello',user_id, req.body)
  
  const typeOfBusiness = parseInt(type_of_business);
  const typeOfContact = parseInt(type_of_contact);
  const userId = parseInt(user_id);
  
  return new Contact ({
    user_id: userId,
    first_name,
    last_name,
    personal_email,
    work_email,
    company_name,
    work_number,
    work_number_extension,
    work_cell_number,
    work_street_address,
    work_state_address,
    work_country_address,
    personal_cellphone_number,
    home_phone_number,
    home_street_address,
    home_state_address,
    home_country_address,
    type_of_business: typeOfBusiness,
    type_of_contact: typeOfContact,
    notes,
  })
  .save()
  .then((contact)=>{
    return res.json(contact)
  })
.catch((err)=>{
  return res.status(500),res.json({message: err.message})
})
})
module.exports = router;