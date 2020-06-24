const mongoose = require('mongoose');
const crypto = require('crypto');
const { v1: uuidv1 } = require('uuid');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: 32
  },
  hashed_password: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    trim: true
  },
  salt: String,
  role: {
    type: Number,
    default: 0
  },
  history: {
    type: Array,
    default: []
  }
}, {timestamps: true});

// virtual field

// password <-- from the client side
userSchema.virtual('password')
// take password from the client side
.set(function(password) {
  // temporary variable this._password
  this._password = password;
  // will be used to hash the password
  this.salt = uuidv1();
  // encrypt hashed_password
  this.hashed_password = this.encryptPassword(password)
})
.get(function() {
  return this._password
});

userSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function(password) {
    if(!password) return '';
    try {
      return crypto.createHmac('sha1', this.salt)
                          .update(password)
                          .digest('hex')
    } catch (err) {
      return ''
    }
  }
};

// We call model User
// and it's based on userSchema
module.exports = mongoose.model('User', userSchema)