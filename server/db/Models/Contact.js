const bookshelf = require('./bookshelf');

class Contact extends bookshelf.Model {
  get tableName() { return "contacts"; }
  get hasTimestamps() { return true; }

user_id() {
  return this.belongsTo("User", "user_id", "id")
}
}
module.exports = bookshelf.model("Contact", Contact);