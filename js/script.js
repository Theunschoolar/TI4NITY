// ========== SCRIPT.JS ==========

// Menunggu seluruh konten halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  // Data anggota
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

  // Element references
  const membersGrid = document.getElementById("membersGrid");
  const searchInput = document.getElementById("search");
  const memberCount = document.getElementById("memberCount");
  const heroSection = document.getElementById("home");
  const btnMobile = document.getElementById("btn-mobile");
  const nav = document.querySelector(".nav");
  const videoModal = document.getElementById("videoModal");
  const modalClose = document.getElementById("modalClose");
  const videoFrame = document.getElementById("videoFrame");
  const yearElement = document.getElementById("year");

  // Initialize
  init();

  function init() {
    // Render anggota
    renderMembers(membersData);

    // Set tahun di footer
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }

    // Setup event listeners
    setupEventListeners();

    // Setup animations
    setupAnimations();

    // Setup mobile menu
    setupMobileMenu();

    // Setup search functionality
    setupSearch();

    // Setup touch improvements
    setupTouchImprovements();
  }

  // 1️⃣ --- FUNGSI RENDER ANGGOTA ---
  function renderMembers(members) {
    if (!membersGrid) return;

    membersGrid.innerHTML = "";

    if (memberCount) {
      memberCount.textContent = members.length;
    }

    // Reset class untuk membersGrid
    membersGrid.classList.remove(
      "few-results-1",
      "few-results-2",
      "few-results-3"
    );

    if (members.length === 0) {
      const searchTerm = searchInput ? searchInput.value : "";
      membersGrid.innerHTML = `
        <div class="no-results">
          <p>Tidak ada anggota yang ditemukan untuk pencarian "${searchTerm}"</p>
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

  // 2️⃣ --- FUNGSI FILTER ANGGOTA ---
  function filterMembers() {
    if (!searchInput) return;

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

  function toggleHeroSection(show) {
    if (!heroSection) return;

    if (show) {
      heroSection.style.display = "block";
    } else {
      heroSection.style.display = "none";
    }
  }

  // 3️⃣ --- SETUP EVENT LISTENERS ---
  function setupEventListeners() {
    // Search input events
    if (searchInput) {
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

      // Prevent zoom on iOS
      searchInput.addEventListener("touchstart", function (e) {
        if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
          this.style.fontSize = "16px";
        }
      });
    }

    // Smooth scroll untuk navigation links
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

          // Close mobile menu jika terbuka
          if (nav && nav.classList.contains("active")) {
            toggleMobileMenu();
          }
        }
      });
    });

    // Modal video (jika ada)
    const openVideo = document.getElementById("openVideo");
    if (openVideo && videoModal && modalClose && videoFrame) {
      openVideo.addEventListener("click", () => {
        videoModal.style.display = "flex";
        videoFrame.src = "https://www.youtube.com/embed/VIDEO_ID?autoplay=1";
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
  }

  // 4️⃣ --- SETUP ANIMATIONS ---
  function setupAnimations() {
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
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeEls.forEach((el) => observer.observe(el));
  }

  // 5️⃣ --- SETUP MOBILE MENU ---
  function setupMobileMenu() {
    if (!btnMobile || !nav) return;

    // Function untuk toggle menu
    function toggleMobileMenu() {
      const isOpen = nav.classList.contains("active");

      // Toggle menu
      nav.classList.toggle("active");
      btnMobile.classList.toggle("active");

      // Update hamburger icon
      btnMobile.textContent = isOpen ? "☰" : "✕";
      btnMobile.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");

      // Toggle body scroll lock
      document.body.classList.toggle("menu-open", !isOpen);

      // Tutup keyboard jika terbuka (untuk mobile)
      if (!isOpen && searchInput && document.activeElement === searchInput) {
        searchInput.blur();
      }
    }

    // Event listener untuk hamburger button
    btnMobile.addEventListener("click", toggleMobileMenu);

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (nav.classList.contains("active")) {
          toggleMobileMenu();
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        nav.classList.contains("active") &&
        !nav.contains(e.target) &&
        !btnMobile.contains(e.target)
      ) {
        toggleMobileMenu();
      }
    });

    // Close menu on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("active")) {
        toggleMobileMenu();
      }
    });

    // Close menu on scroll (mobile)
    let scrollTimeout;
    window.addEventListener(
      "scroll",
      () => {
        if (nav.classList.contains("active")) {
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            if (nav.classList.contains("active")) {
              toggleMobileMenu();
            }
          }, 100);
        }
      },
      { passive: true }
    );
  }

  // 6️⃣ --- SETUP SEARCH FUNCTIONALITY ---
  function setupSearch() {
    if (!searchInput) return;

    // Create clear button
    const clearSearchBtn = document.createElement("button");
    clearSearchBtn.innerHTML = "✕";
    clearSearchBtn.className = "clear-search";
    clearSearchBtn.setAttribute("aria-label", "Clear search");
    clearSearchBtn.setAttribute("type", "button");

    // Insert clear button
    const searchContainer = searchInput.parentNode;
    if (searchContainer) {
      searchContainer.appendChild(clearSearchBtn);
    }

    // Toggle visibility
    function updateClearButton() {
      clearSearchBtn.style.display =
        searchInput.value.length > 0 ? "block" : "none";
    }

    // Event listeners for clear button
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      filterMembers();
      searchInput.focus();
      updateClearButton();
    });

    searchInput.addEventListener("input", () => {
      updateClearButton();
      // Filter dilakukan di event listener utama
    });

    // Initialize
    updateClearButton();
  }

  // 7️⃣ --- SETUP TOUCH IMPROVEMENTS ---
  function setupTouchImprovements() {
    // Add active state for touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints) {
      // Add touch feedback to member cards
      setTimeout(() => {
        const memberCards = document.querySelectorAll(".member-card");
        memberCards.forEach((card) => {
          card.style.cursor = "pointer";

          card.addEventListener(
            "touchstart",
            function () {
              this.style.transform = "scale(0.98)";
              this.style.transition = "transform 0.1s ease";
            },
            { passive: true }
          );

          card.addEventListener(
            "touchend",
            function () {
              this.style.transform = "";
            },
            { passive: true }
          );

          card.addEventListener(
            "touchcancel",
            function () {
              this.style.transform = "";
            },
            { passive: true }
          );
        });
      }, 500);

      // Lazy load images for better performance
      if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute("data-src");
                if (src) {
                  img.src = src;
                  img.removeAttribute("data-src");
                }
                imageObserver.unobserve(img);
              }
            });
          },
          { rootMargin: "50px 0px" }
        );

        document.querySelectorAll("img[data-src]").forEach((img) => {
          imageObserver.observe(img);
        });
      }
    }
  }

  // 8️⃣ --- HANDLE WINDOW RESIZE ---
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // Close mobile menu pada resize jika perlu
      if (window.innerWidth > 900 && nav && nav.classList.contains("active")) {
        nav.classList.remove("active");
        if (btnMobile) {
          btnMobile.classList.remove("active");
          btnMobile.textContent = "☰";
        }
        document.body.classList.remove("menu-open");
      }
    }, 250);
  });
});
