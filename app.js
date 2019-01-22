import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/usersRoute";
import con from "./models/dbconnection";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static(__dirname + "/ui"));

app.use("/", routes);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

export default app;
