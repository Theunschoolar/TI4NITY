// ========== SCRIPT.JS ==========

// Menunggu seluruh konten halaman dimuat
document.addEventListener("DOMContentLoaded", () => {

  // 1️⃣ --- ANIMASI FADE-UP ON SCROLL ---
  const fadeEls = document.querySelectorAll(".member-card, .info-card, .hero-content, .hero-media, .section-head");

  // Tambahkan style awal (pudar dan turun)
  fadeEls.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
  });

  // Gunakan Intersection Observer agar animasi hanya muncul saat terlihat di layar
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target); // hentikan pengamatan setelah animasi muncul
      }
    });
  }, { threshold: 0.15 });

  fadeEls.forEach(el => observer.observe(el));

  // 2️⃣ --- TAHUN OTOMATIS DI FOOTER ---
  document.getElementById("year").textContent = new Date().getFullYear();

  // 3️⃣ --- HAMBURGER MENU UNTUK MOBILE ---
  const btnMobile = document.getElementById("btn-mobile");
  const nav = document.querySelector(".nav");

  btnMobile.addEventListener("click", () => {
    nav.classList.toggle("active");
    btnMobile.textContent = nav.classList.contains("active") ? "✕" : "☰";
  });

  // 4️⃣ --- MODAL VIDEO ---
  const videoModal = document.getElementById("videoModal");
  const openVideo = document.getElementById("openVideo");
  const modalClose = document.getElementById("modalClose");
  const videoFrame = document.getElementById("videoFrame");

  if (openVideo && videoModal && modalClose && videoFrame) {
    openVideo.addEventListener("click", () => {
      videoModal.style.display = "flex";
      videoFrame.src = "https://www.youtube.com/embed/VIDEO_ID?autoplay=1"; // ganti VIDEO_ID sesuai video kamu
    });

    modalClose.addEventListener("click", () => {
      videoModal.style.display = "none";
      videoFrame.src = "";
    });

    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) {
        videoModal.style.display = "none";
        videoFrame.src = "";
      }
    });
  }

  // 5️⃣ --- ANIMASI SCROLL LEMBUT UNTUK LINK NAVIGASI ---
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth"
        });
      }
    });
  });

});
