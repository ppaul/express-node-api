import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: "You must enter the first name"
  },
  lastName: {
    type: String,
    required: "You must enter the last name"
  },
  email: {
    type: String
  },
  company: {
    type: String
  },
  phone: {
    type: Number
  },
  created: {
    type: Date,
    default: Date.now
  }
});