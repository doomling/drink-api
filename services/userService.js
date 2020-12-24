const User = require("./../models/userModel");

class UserService {
  getUserByName(name) {
    const query = User.findOne({ name: name }).exec();
    return query;
  }
}

module.exports = UserService;
