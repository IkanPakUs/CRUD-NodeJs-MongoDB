const Product = require("./../models/Products");

exports.findAll = async (req, res) => {
	try {
		let products = await Product.find();
		res.render("index", { products });
	} catch (err) {
		console.log("Error : ", err);
	}
};

exports.create = async (req, res) => {
	let newProduct = new Product({
		nama_produk: req.body.nama_produk.toLowerCase(),
		keterangan: req.body.keterangan.toLowerCase(),
		harga: req.body.harga,
		jumlah: req.body.jumlah,
	});

	try {
		await Product.create(newProduct);
		res.redirect("/");
	} catch (err) {
		console.log("Failed to create data ", err);
	}
};

exports.delete = async (req, res) => {
	let id = req.params.id;

	try {
		await Product.deleteOne({ _id: id });
		res.redirect("/");
	} catch (err) {
		console.log("Failed to delete ", err);
	}
};

exports.find = async (req, res) => {
	let key = req.query.key;
	let products = [];

	try {
		if (key) {
			products = await Product.find({ nama_produk: { $regex: `.*${key}.*` } });
		} else {
			products = await Product.find();
		}
		res.render("index", { products });
	} catch (err) {
		console.log("Failed to find data ", err);
	}
};

exports.update = async (req, res) => {
	let id = req.params.id;

	let updateProduct = {
		nama_produk: req.body.nama_produk.toLowerCase(),
		keterangan: req.body.keterangan.toLowerCase(),
		harga: req.body.harga,
		jumlah: req.body.jumlah,
	};

	try {
		await Product.updateOne({ _id: id }, updateProduct);
		res.redirect("/");
	} catch (err) {
		console.log("Gagal memperbaharui data", err);
	}
};
