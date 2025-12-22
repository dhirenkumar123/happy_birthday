function playMusic() {
  const music = document.getElementById('background-music');
  music.play();
}
window.addEventListener('DOMContentLoaded', playMusic);
document.body.addEventListener('click', playMusic, { once: true });

/* TYPE TEXT */
new TypeIt("#teks1", {
  strings: ["Selamat ulang tahun sayang 💖", "Terima kasih sudah hadir di hidup aku."],
  speed: 70,
  waitUntilVisible: true
}).go();

new TypeIt("#teks2", {
  strings: ["Aku harap kamu selalu bahagia.", "Aku selalu ada buat kamu ❤️"],
  speed: 70,
  waitUntilVisible: true
}).go();

/* OUR GALLERY */
let galleryIndex = 1;
const totalImages = 10;

function showGallery() {
  document.getElementById("our-gallery").classList.remove("d-none");
}

function nextImage() {
  galleryIndex++;
  if (galleryIndex > totalImages) galleryIndex = 1;
  updateGallery();
}

function prevImage() {
  galleryIndex--;
  if (galleryIndex < 1) galleryIndex = totalImages;
  updateGallery();
}

function updateGallery() {
  const img = document.getElementById("gallery-image");
  img.src = `./img/gallery/${galleryIndex}.jpg`;
}

/* tampilkan gallery otomatis */
setTimeout(showGallery, 4000);
