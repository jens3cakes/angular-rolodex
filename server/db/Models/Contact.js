const bookshelf = require('./bookshelf');

class Contact extends bookshelf.Model {
  get tableName() { return "contacts"; }
  get hasTimestamps() { return true; }

  user_id() {
    return this.belongsTo("User", "user_id", "id")
  }
  type_of_business_id() {
    return this.belongsTo("TypeOfBusiness", "type_of_business_id", "id")
  }
  type_of_contact_id() {
    return this.belongsTo("TypeOfContact", "type_of_contact_id", "id")
  }


}
module.exports = bookshelf.model("Contact", Contact);