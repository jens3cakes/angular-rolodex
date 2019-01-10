const express = require('express');
const router = express.Router();
const User = require('../db/Models/User');
const Contact = require('../db/Models/Contact')
const bcrypt = require('bcryptjs');
const saltRounds = 12;

router.get('/:username', (req, res)=> {
const getUsernameParam = req.params.username;

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
          return res.json(customer);
        })
        .catch(err => {
          return res.status(500).json({message: err.message})
        });
      }

    });
  })
});
module.exports = router;