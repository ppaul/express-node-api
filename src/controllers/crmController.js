import mongoose from "mongoose";

import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req, res) => {
  let newContact = new Contact(req.body);
  try {
    const contact = await newContact.save();
    res.json(contact);
  } catch (e) {
    res.send(e);
  }
}


export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.json(contacts);
  } catch (e) {
    res.send(e);
  }
}

export const getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.contactId);
    res.json(contact);
  } catch (e) {
    res.send(e);
  }
}

export const updateContact = async (req, res) => {
  try {
    await Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true });
    res.json({ message: "Contact deleted successfuly" });
  } catch (e) {
    res.send(e);
  }
}

export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.deleteOne({ _id: req.params.contactId });
    res.json(contact);
  } catch (e) {
    res.send(e);
  }
}