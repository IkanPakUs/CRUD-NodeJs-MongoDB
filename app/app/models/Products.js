const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let productSchema = new Schema({
	nama_produk: {
		type: String,
	},
	keterangan: {
		type: String,
	},
	harga: {
		type: Number,
	},
	jumlah: {
		type: Number,
	},
});

module.exports = mongoose.model("product", productSchema);
