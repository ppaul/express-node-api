import { addNewContact, deleteContact, getContact, getContacts, updateContact } from "../controllers/crmController";

const routes = (app) => {
  app.route("/contact")
    .get((req, res, next) => {
      // middleware
      console.log(`Request from ${req.originalUrl} with method ${req.method}`)
      next();
    }, getContacts)

    .post(addNewContact);

  app.route("/contact/:contactId")
    .get(getContact)
    .put(updateContact)
    .delete(deleteContact);
}

export default routes;