const bookshelf = require('./bookshelf')

class TypeOfContact extends bookshelf.Model{
  get tableName(){return "type_of_contact";}

  type_of_contact_id(){
    return this.hasMany('Contact', 'type_of_contact_id')
  }
}

module.exports = bookshelf.model('TypeOfContact', TypeOfContact)