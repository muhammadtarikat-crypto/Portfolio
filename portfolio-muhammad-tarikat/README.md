# Portfolio Muhammad Tarikat

Website portfolio pribadi (HTML5, CSS3, JavaScript) tanpa framework.

## Struktur folder

```
portfolio-muhammad-tarikat/
├── index.html
├── css/style.css
├── js/script.js
├── assets/
│   ├── images/   (profile.svg dan 3 thumbnail project)
│   └── icons/    (kosong, untuk ikon buatan sendiri)
└── README.md
```

## Membuat project di VS Code
1. Ekstrak/salin folder `portfolio-muhammad-tarikat` ke komputer Anda.
2. Buka VS Code, pilih **File > Open Folder**, lalu pilih folder tersebut.

## Menjalankan website
- **Cara mudah:** klik dua kali `index.html` untuk membukanya di browser.
- **Live Server (disarankan):** pasang ekstensi **Live Server** (Ritwick Dey) di panel Extensions, klik kanan `index.html`, pilih **Open with Live Server**. Halaman ikut refresh saat Anda menyimpan perubahan.

Catatan: ikon (Font Awesome) dan font dimuat dari CDN, jadi butuh koneksi internet. Tidak ada yang perlu di-install.

## Mengganti foto profil
Simpan foto di `assets/images/` (misalnya `foto-saya.jpg`), lalu di `index.html` cari komentar `GANTI FOTO PROFIL` dan ubah `src="assets/images/profile.svg"` menjadi `src="assets/images/foto-saya.jpg"`.

## Mengganti gambar project
Simpan gambar (disarankan rasio 16:10, mis. 1280x800) di `assets/images/`, lalu ubah `src` pada tiap blok `<article class="card project">` di bagian Projects.

## Mengganti email dan social media
Di `index.html`, cari `emailanda@example.com` dan `usernameanda` (ada di bagian Contact dan Footer), lalu ganti dengan data Anda. Gunakan fitur **Ctrl + H** (Find & Replace) agar semuanya terganti sekaligus.

## Mengubah warna
Buka `css/style.css` dan edit variabel di bagian `:root` paling atas (`--navy`, `--blue`, `--cyan`, dan seterusnya). Seluruh website ikut berubah.

## Menambah project baru
Di bagian Projects pada `index.html`, salin satu blok `<article class="card project reveal">...</article>`, tempel di bawah blok terakhir, lalu ubah gambar, kategori, judul, deskripsi, teknologi, dan link tombol **View Project**.

## Mengganti teks yang diketik di hero
Edit daftar `roles` di bagian "TYPING ANIMATION" pada `js/script.js`.
