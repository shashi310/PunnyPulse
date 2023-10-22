const express = require('express');

require("dotenv").config();

const {UserRoute}=require("./Routes/Users.Routes")
const { HistoryRoute } = require("./Routes/History.Routes");


const { connection } = require("./config/db");

const cors = require("cors");

const { Generate } = require('./Routes/Generate.Routes');


const app = express();
const port = process.env.PORT || 8080
app.use(express.json());
app.use(cors());


app.use("/user", UserRoute);

app.use("/history", HistoryRoute);
app.use("/ai",Generate)


app.get('/', (req, res) => {
	res.status(200).send("Welcome to the backend of PunnyPulse")
});


app.listen(port, async () => {
	try {
		await connection();
		console.log(`Listening at port - ${port}`);
	} catch (error) {
		console.error(error.message);
	}
});