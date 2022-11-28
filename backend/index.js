const express = require ('express');
const mongoose = require ('mongoose');
require ('dotenv'). config ();
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");

const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true}).then(()=>{
    console.log("Mongo DB connected");
});
app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(3000, ()=>{
    console.log("Backend Server is running");
})