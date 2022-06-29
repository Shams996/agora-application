const express = require("express");
const app = express();
app.use(express.json());
const router = require("./routes/router");
app.use(router);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Agora Auth Token Server listening at Port ${port}`));