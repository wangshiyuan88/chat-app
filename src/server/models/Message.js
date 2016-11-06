import mongoose from 'mongoose';

var messageSchema = mongoose.Schema({
  content: String,
  user: Object,
  time: Date
});

module.exports = mongoose.model('Message', messageSchema);
