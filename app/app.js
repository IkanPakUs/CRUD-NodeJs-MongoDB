const express = require("express");
const app = express();
const methodOverride = require("method-override");
const port = 8000;
const path = require("path");

require("./config/db.config");

let web_router = require("./routes/web");

// Static file
app.use(express.static(path.join(__dirname, "public")));

// Use override method for PUT/DELETE
app.use(methodOverride("_method"));

// Use templating EJS
app.set("view engine", "ejs");

// For body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", web_router);

app.listen(port, (req, res) => {
	console.log(`Server running in container:${port}`);
});
