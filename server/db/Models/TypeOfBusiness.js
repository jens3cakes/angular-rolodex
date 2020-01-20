const bookshelf = require ('./bookshelf')

class TypeOfBusiness extends bookshelf.Model{
  get tableName() {return "type_of_business";}
  
  type_of_business_id(){
    return this.hasMany("Contact", 'type_of_business_id')
  }
} 
module.exports = bookshelf.model('TypeOfBusiness', TypeOfBusiness)