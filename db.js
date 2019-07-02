import mongoose from "mongoose";


mongoose.connect("mongodb://localhost:27017/wetube", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("Database is online 💽");

const handleError = error => console.log(`Error on Database Connection : ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);