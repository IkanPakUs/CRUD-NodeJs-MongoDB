const mongoose = require("mongoose");
const url = "mongodb://mongo:27017/";

mongoose.connect(
	url,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	},
	(err) => {
		if (!err) {
			console.log("MongoDB Connection Succeeded.");
		} else {
			console.log("Error in DB connection : " + err);
		}
	}
);
