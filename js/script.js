/* ===== 1. MENU HAMBURGER (tampilan mobile) ===== */
const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
  navLinks.classList.remove("open");
  navbar.classList.remove("menu-open");
  menuBtn.setAttribute("aria-expanded", "false");
}

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navbar.classList.toggle("menu-open", isOpen);
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Tutup menu otomatis setelah salah satu link diklik
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

/* ===== 2. NAVBAR BERUBAH SAAT SCROLL ===== */
function handleScroll() {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
}
window.addEventListener("scroll", handleScroll);
handleScroll();

/* ===== 3. TYPING ANIMATION PADA PROFESI =====
   Ubah daftar di bawah untuk mengganti teks yang diketik. */
const roles = ["Programmer", "Mobile App Developer", "UI/UX Designer", "Graphic Designer"];
const typingEl = document.getElementById("typing");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = roles[roleIndex];
  charIndex += deleting ? -1 : 1;
  typingEl.textContent = current.substring(0, charIndex);

  let delay = deleting ? 50 : 100;
  if (!deleting && charIndex === current.length) {
    deleting = true;
    delay = 1400; // jeda setelah satu kata selesai diketik
  } else if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 300;
  }
  setTimeout(typeLoop, delay);
}
typeLoop();

/* ===== 4. ANIMASI SECTION MUNCUL SAAT DI-SCROLL ===== */
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  // Browser lama: langsung tampilkan semua
  revealItems.forEach((item) => item.classList.add("show"));
}

/* ===== 5. VALIDASI FORM KONTAK (belum mengirim email) ===== */
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

function setError(inputId, message) {
  document.getElementById(inputId + "Error").textContent = message;
  document.getElementById(inputId).classList.toggle("invalid", message !== "");
  return message === "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  statusEl.textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const okName = setError("name", name.length < 2 ? "Nama minimal 2 karakter." : "");
  const okEmail = setError("email", !emailPattern.test(email) ? "Masukkan email yang valid." : "");
  const okMessage = setError("message", message.length < 10 ? "Pesan minimal 10 karakter." : "");

  if (okName && okEmail && okMessage) {
    statusEl.textContent = "Terima kasih! Pesan Anda lolos validasi (demo, belum terkirim).";
    form.reset();
  }
});
