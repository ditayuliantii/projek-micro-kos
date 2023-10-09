var swiper = new Swiper(".mySwiperPopuler", {
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: false,
    slidesPerView: "auto",
    navigation: {
        nextEl: ".bx-chevron-right-circle",
        prevEl: ".bx-chevron-left-circle",
    },

});

document.getElementById("lihatSemuaKos").addEventListener("click", function() {
    window.location.href = "sebelum-login/lihat_semua.html";
});

// simpan dan hapus pada filter

// $(document).ready(function () {
//     // Mengatur event handler untuk tombol Simpan
//     $("#simpanBtn").click(function () {
//         var selectedOptions = [];

//         // Mendapatkan nilai checkbox yang dicentang
//         $(".dropdown-item input:checked").each(function () {
//             selectedOptions.push($(this).val());
//         });

//         // Menyimpan nilai-nilai yang dipilih
//         console.log("Pilihan yang dipilih: " + selectedOptions.join(", "));
//     });

//     // Mengatur event handler untuk tombol Hapus
//     $("#hapusBtn").click(function () {
//         // Menghapus centang dari semua checkbox
//         $(".dropdown-item input:checked").prop("checked", false);
//     });
// });


// filter harga kos
// $(document).ready(function() {
//     // Mengatur event handler untuk tombol Simpan
//     $("#simpanBtn").click(function() {
//         var minVal = $("#minInput").val();
//         var maxVal = $("#maxInput").val();
//         $("#minValue").text(minVal + " ribu");
//         $("#maxValue").text(maxVal / 1000000 + " juta");
//     });

//     // Mengatur event handler untuk tombol Hapus
//     $("#hapusBtn").click(function() {
//         $("#minInput").val(10000); // Mengembalikan nilai minimal ke default
//         $("#maxInput").val(10000000); // Mengembalikan nilai maksimal ke default
//         $("#minValue").text("10 ribu"); // Mengembalikan teks minimal ke default
//         $("#maxValue").text("10,00 juta"); // Mengembalikan teks maksimal ke default
//     });
// });



// AOS
AOS.init();