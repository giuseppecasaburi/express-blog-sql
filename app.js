const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/routers");
const notFoundFunction = require("./middleware/notFound");
const cors = require("cors");

app.use(express.json());

app.use(
    cors({
    origin: "http://localhost:5173",
}))

app.get("/", (req, res) => {
    res.json("Hello server");
})

app.use("/posts", router);

app.use(notFoundFunction);

app.listen(port, () => {
    console.log("Server avviato con successo");
});