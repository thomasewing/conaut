const express = require("express");
const cors = require("cors");
const app = express();

app.use(
    cors(),
    express.json(),
    express.urlencoded({extended:true})
)

//require mongoose config
require("./config/mongoose");
//require routes
require("./routes/event")(app)
app.listen(8000, ()=>console.log("Server is listening to Black Sabbath on port 8000"))