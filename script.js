alert('Selamat datang di Website Profil UMKM Sarapan Bu Har!');

const namaUMKM = 'Sarapan Bu Har';
console.log('Nama UMKM:', namaUMKM);

let JumlahProduk = 6;
console.log('Jumlah produk awal:', JumlahProduk);
JumlahProduk += 2;
console.log('Setelah menambah produk baru:', JumlahProduk);

let produkMakanan = 6;
let produkMinuman = 3;
let totalProduk = produkMakanan + produkMinuman;
console.log('Jumlah produk makanan:', produkMakanan);
console.log('Jumlah produk minuman:', produkMinuman);
console.log('Total semua produk:', totalProduk);

const daftarProduk = [
    { nama: 'Nasi Rendang', harga: 12000 },
    { nama: 'Nasi Ayam', harga: 10000 },
    { nama: 'Nasi Megono', harga: 5000 },
    { nama: 'Ayam Opor', harga: 8000 },
    { nama: 'Ayam Kecap', harga: 7000 },
    { nama: 'Telor Balado', harga: 6000 }
];

console.log('Daftar produk UMKM:');
daftarProduk.forEach((produk, index) => {
    console.log(`${index + 1}. ${produk.nama} - Rp${produk.harga.toLocaleString('id-ID')}`);
});

alert(`Terimakasih telah mengunjungi ${namaUMKM}! Silahkan cek daftar produk di console.`);