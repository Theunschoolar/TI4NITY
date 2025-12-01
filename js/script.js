// ========== SCRIPT.JS ==========

// Menunggu seluruh konten halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const membersData = [
    {
      name: "ELL",
      fullName: "Azzel Fausta Hamda Yuval",
      image: "assets/Azzel Fausta(1).jpeg",
    },
    {
      name: "Fadhil",
      fullName: "Fadhil Syarief Pratomo",
      image: "assets/Fadhil Syarief Pratomo.jpeg",
    },
    {
      name: "Dani",
      fullName: "Dani Ramadhan",
      image: "assets/Dani Ramadhan.jpeg",
    },
    {
      name: "Padolski",
      fullName: "Renhard Padolski Herlambang",
      image: "assets/Renhard Padolski Herlambang.jpeg",
    },
    {
      name: "Aurel",
      fullName: "Aurellia Sangganna",
      image: "assets/Aurellia Sangganna.jpeg",
    },
    {
      name: "Vani",
      fullName: "Aulia Vania Shanty",
      image: "assets/Aulia Vania Shanty.jpg",
    },
    {
      name: "Zuhri",
      fullName: "Muhammad Ibrahim Zuhri",
      image: "assets/Muhammad Ibrahim Zurhri.webp",
    },
    {
      name: "Alfa",
      fullName: "Muhammad Alfa Khakim",
      image: "assets/Muhammad Alfa Khakim.jpeg",
    },
    {
      name: "Nouval",
      fullName: "Muhammad Nouval Ar-Rizky",
      image: "assets/Muhammad Nouval Ar-rizky.jpeg",
    },
    {
      name: "Syuja",
      fullName: "Farras Syuja",
      image: "assets/Farras Syuja.jpg",
    },
    {
      name: "Levi",
      fullName: "Fahlevi Fahad Aqmaddina",
      image: "assets/Fahlevi Fahad Aqmaddina.jpeg",
    },
    {
      name: "Dicky",
      fullName: "Dicky Maulana Aziz",
      image: "assets/Dicky Maulana Aziz.jpeg",
    },
    {
      name: "Vira",
      fullName: "Harmelia Meivira",
      image: "assets/Harmelia Meivira.jpeg",
    },
    {
      name: "Dean",
      fullName: "Deandra Arta Wiguna",
      image: "assets/Deandra Arta Wiguna.jpeg",
    },
    {
      name: "Indah",
      fullName: "Indah Aryanti Kartika Santoso",
      image: "assets/Indah Aryanti Kartika Santoso.jpeg",
    },
    {
      name: "Fatih",
      fullName: "Muhammad Fatih Ali Zam-Zami",
      image: "assets/Muhammad Fatih Ali Zam-Zami.jpeg",
    },
    {
      name: "Ruiz",
      fullName: "Muhammad Ruiz Ruzil",
      image: "assets/Muhammad Ruiz Ruzil.jfif",
    },
    {
      name: "Rizal",
      fullName: "Rizal Fajri Arrasyid",
      image: "assets/Rizal Fajri Arrasyid.jpeg",
    },
    {
      name: "Qosam",
      fullName: "Izzudien Al-Qosam",
      image: "assets/Izudien Al-Qasam.jpeg",
    },
    {
      name: "Lily",
      fullName: "Anjaly Sallima Nafia",
      image: "assets/Anjaly Salima Nafia.jpeg",
    },
    {
      name: "Rafif",
      fullName: "Muhammad Rafif Sakha Efendi",
      image: "assets/Muhammad Rafif.jpeg",
    },
    {
      name: "Sufi",
      fullName: "Sufi Sundari",
      image: "assets/Sufi Sundari(1).jpeg",
    },
    {
      name: "Haikal",
      fullName: "Haikal Rakha Pratama",
      image: "assets/Haikal Rakha.jpeg",
    },
    {
      name: "Nahdi",
      fullName: "Muhammad Nahdi Hidayat",
      image: "assets/Muhammad Nahdi Hidayat.jpeg",
    },
    {
      name: "Rizky",
      fullName: "Rizky Ghaly Saputra",
      image: "assets/Rizky Ghaly Saputra.jpeg",
    },
    {
      name: "Rizaldi",
      fullName: "Rizaldi Henry Prakoso",
      image: "assets/Rizaldi Henri.jpeg",
    },
    {
      name: "Alfian",
      fullName: "Fairuz Alfian Priasahashika",
      image: "assets/Fairuz Alfian.png",
    },
    {
      name: "Tirta",
      fullName: "Zulfia Tirta Irawan",
      image: "assets/Zulfia Tirta Irawan.jpg",
    },
    {
      name: "Gerald",
      fullName: "Charly Gerald Simanjuntak",
      image: "assets/Charly Gerald Simanjuntak.jpeg",
    },
    {
      name: "Haikal",
      fullName: "Haikal Akhsan Darmawan",
      image: "assets/Haikal Akhsan.jpeg",
    },
    {
      name: "Sehan",
      fullName: "Reyhan Arya Adyatama",
      image: "assets/Reyhan Aria Adyatama.jpeg",
    },
    {
      name: "Ozan",
      fullName: "Muhammad Ammar Farras Fauzan",
      image: "assets/Muhammad Ammar Farras Fauzan.jpeg",
    },
    {
      name: "Raynard",
      fullName: "Raynard Kayana Alvanta Pramuditho",
      image: "assets/Raynard Alvanta.jpeg",
    },
    { name: "Ilma", fullName: "Ilma Nazala", image: "assets/Ilma Nazala.jpeg" },
    { name: "Farritz", fullName: "Farritz", image: "assets/Farritz.jpeg" },
    {
      name: "Selly",
      fullName: "Selly Anggun Ramadhani",
      image: "assets/Selly Anggun Ramadhani.jpeg",
    },
    {
      name: "Afifah",
      fullName: "Afifah Hasna Nafisa",
      image: "assets/Afifah Hasna Nafisa.jpg",
    },
    {
      name: "Fairuz",
      fullName: "Fairuz Mumtaz Mutmainah",
      image: "assets/Fairuz Mumtaz Mutmainah.jfif",
    },
    {
      name: "Uzzi",
      fullName: "Fathiyya Zahrotussyifa",
      image: "assets/Fathiyya Zahrotussyifa.jpeg",
    },
    {
      name: "Hema",
      fullName: "Hema Septia Bemanda",
      image: "assets/Hema Septia Bemanda.jpeg",
    },
  ];
  const membersGrid = document.getElementById("membersGrid");
  const searchInput = document.getElementById("search");
  const memberCount = document.getElementById("memberCount");
  const heroSection = document.getElementById("home");

  function toggleHeroSection(show) {
    if (show) {
      heroSection.style.display = "block";
    } else {
      heroSection.style.display = "none";
    }
  }

  function renderMembers(members) {
    membersGrid.innerHTML = "";
    memberCount.textContent = members.length;

    // Reset class untuk membersGrid
    membersGrid.classList.remove("few-results-1", "few-results-2", "few-results-3");

    if (members.length === 0) {
      membersGrid.innerHTML = `
        <div class="no-results">
          <p>Tidak ada anggota yang ditemukan untuk pencarian "${searchInput.value}"</p>
        </div>
      `;
      return;
    }

    // Tambahkan class khusus berdasarkan jumlah hasil
    if (members.length <= 3) {
      membersGrid.classList.add(`few-results-${members.length}`);
    }

    members.forEach((member) => {
      const memberCard = document.createElement("article");
      memberCard.className = "member-card";
      
      // Tambahkan class khusus untuk card dalam pencarian sedikit
      if (members.length <= 3) {
        memberCard.classList.add("large-card");
      }
      
      memberCard.innerHTML = `
        <div class="avatar" style="background-image:url('${member.image}')"></div>
        <h4>${member.name}</h4>
        <p class="role">${member.fullName}</p>
      `;
      membersGrid.appendChild(memberCard);
    });
  }

  function filterMembers() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === "") {
      toggleHeroSection(true);
      renderMembers(membersData);
    } else {
      toggleHeroSection(false);
      const filtered = membersData.filter(
        (member) =>
          member.name.toLowerCase().includes(searchTerm) ||
          member.fullName.toLowerCase().includes(searchTerm)
      );
      renderMembers(filtered);
    }
  }

  searchInput.addEventListener("input", filterMembers);

  searchInput.addEventListener("focus", function () {
    const searchTerm = this.value.toLowerCase().trim();
    if (searchTerm !== "") {
      toggleHeroSection(false);
    }
  });

  searchInput.addEventListener("blur", function () {
    const searchTerm = this.value.toLowerCase().trim();
    if (searchTerm === "") {
      toggleHeroSection(true);
    }
  });

  renderMembers(membersData);
  document.getElementById("year").textContent = new Date().getFullYear();
  
  // 1️⃣ --- ANIMASI FADE-UP ON SCROLL ---
  const fadeEls = document.querySelectorAll(
    ".member-card, .info-card, .hero-content, .hero-media, .section-head"
  );

  // Tambahkan style awal (pudar dan turun)
  fadeEls.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
  });

  // Gunakan Intersection Observer agar animasi hanya muncul saat terlihat di layar
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target); // hentikan pengamatan setelah animasi muncul
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeEls.forEach((el) => observer.observe(el));

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
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
