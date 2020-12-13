const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const usersSchema = new Schema({
  fullname: {
    type: String,
    unique: false,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: false,
    required: true,
  },
  admin: {
    type: Boolean,
    unique: false,
    required: true,
    default: false,
  },
  meals: [
    {
      type: Schema.Types.ObjectId,
      ref: "Meals"
    }
  ],
  workouts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Workouts"
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

usersSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

usersSchema.methods.validPassword = (password, encrypted) => {
  return bcrypt.compareSync(password, encrypted);
};

const User = mongoose.model('User', usersSchema);

module.exports = User;
