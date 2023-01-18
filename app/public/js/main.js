hargaFormat();
detailBarang();

function hargaFormat() {
	$("#barang #harga-barang").each(function () {
		let hasil = [];

		let temp = $(this).text().split("").reverse();

		for (let i = 0; i < temp.length; i++) {
			if ((i + 1) % 3 == 0) {
				hasil.push(temp[i], ",");
			} else {
				hasil.push(temp[i]);
			}
		}

		$(this).html(`Rp.${hasil.reverse().join("")}`);
	});
}

function detailBarang() {
	$(".update-btn").on("click", function () {
		$(".update-form").html(
			`<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Update Data</h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<form action="/${$(this).attr("id")}?_method=put" method="post">
						<div class="modal-body">
							<div class="forms">
								<input
									type="text"
									class="form-control res-form"
									value="${$(this).attr("nama")}"
									name="nama_produk"
								/>
								<input
									type="text"
									class="form-control res-form"
									placeholder="Masukan keterangan barang"
									value="${$(this).attr("keterangan")}"
									name="keterangan"
								/>
								<div class="row">
									<div class="col">
										<input
											type="text"
											class="form-control mini-form"
											placeholder="Masukan jumlah barang"
											value="${$(this).attr("jumlah")}"
											name="jumlah"
										/>
									</div>
									<div class="col">
										<input
											type="text"
											class="form-control mini-form"
											placeholder="Masukan harga barang"
											value="${$(this).attr("harga")}"
											name="harga"
										/>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-secondary"
									data-bs-dismiss="modal"
								>
									Close
								</button>
								<button type="submit" class="btn btn-primary">Simpan</button>
							</div>
						</div>
					</form>`
		);
	});
}
