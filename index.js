const express = require("express")
const PORT = 8000

require("./config/dbConnect")
const app = express()

app.use(express.json())


app.use("/api/contacts", require("./Routes/routesManage"))

app.listen(PORT, ()=>{
    console.log(`listen at ${PORT}`);
})