import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/crmRoutes";

const app = express();

const PORT = 3000;

// mongoose connection to MongoDB
// I used Studio 3T for simply connect
mongoose.connect('mongodb://localhost/CRMdb', {
  useNewUrlParser: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve some static files
app.use(express.static('public'));

routes(app);


app.get('/', (req, res) => {
  res.send(`Node express server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});