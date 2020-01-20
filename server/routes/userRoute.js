const express = require('express');
const router = express.Router();
const User = require('../db/Models/User');
const Contact = require('../db/Models/Contact')
const bcrypt = require('bcryptjs');
const saltRounds = 12;

router.get('/:username', (req, res)=> {
const getUsernameParam = req.params.username;
console.log('where am I using this')
return new User()
.where({ username:getUsernameParam })
.fetch({
  require:true,
  })
  .then(user =>{
    if(!user){
      return res.status(400).json({message: `User not found`})
    }else{
      const userObj = user.serialize();
      return res.json(userObj);
    }
  })
  .catch((err)=>{
    return res.status(500).json({message: err.message})
  })
});

router.post('/', (req, res)=>{
  console.log('hello')
  let {first_name, last_name, username, password, email, cellphone_number, home_phone_number} = req.body;
  bcrypt.genSalt(saltRounds, function(err,salt){
    bcrypt.hash(password, salt, function(err, hash){
      {
        return new User({
          first_name,
          last_name,
          username,
          password:hash,
          email,
          cellphone_number,
          home_phone_number
        })
        .save()
        .then(customer =>{
          console.log(customer.id)
          return res.json(customer);
        })
        .catch(err => {
          return res.status(500).json({message: err.message})
        });
      }

    });
  })
});

router.put('/editProfile', (req,res)=>{
  let{id,first_name, last_name, email, cellphone_number, home_phone_number}=req.body;
  console.log(id)
  return new User()
  .where({id:id})
  .fetch({require:true})
  .then(user=>{
    user.save({
      first_name,
       last_name,
       email,
       cellphone_number,
       home_phone_number
    })
    return user
  })
  .then(user=>{
    console.log('put',user)
    return res.json(user)
  })
})
module.exports = router;