const mongoose = require("mongoose");

const DB =
  "mongodb+srv://mohsin:Webdeveloper17022000@cluster0.ouq5l.mongodb.net/MernStackCRUD?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB is successfully connected"))
  .catch((err) => console.log(err.message));
