const daftarGambar = document.querySelectorAll('.gambar-produk');

const tampilkanNamaProduk = (Event) => {
    let gambar = Event.target;
    const nama = gambar.dataset.nama;
    const teks = `<p>${nama}</p>`;

    const tempatNama = gambar.nextElementSibling;
    tempatNama.classList.toggle('aktif');
    if (tempatNama.innerHTML === '') {
        tempatNama.innerHTML = teks;
    } else {
        tempatNama.innerHTML = '';
    }
};

daftarGambar.forEach((img) => {
    img.addEventListener('mouseover', tampilkanNamaProduk);
});