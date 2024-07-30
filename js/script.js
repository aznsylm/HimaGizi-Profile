/* ************************************************** SWIPER JS ************************************************** */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  rewind: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      on: {
        init: function () {
          centerCard();
        },
        resize: function () {
          centerCard();
        },
      },
    },

    520: {
      slidesPerView: 2,
      on: {
        init: function () {
          centerCard();
        },
        resize: function () {
          centerCard();
        },
      },
    },

    950: {
      slidesPerView: 3,
      on: {
        init: function () {
          centerCard();
        },
        resize: function () {
          centerCard();
        },
      },
    },
    1440: {
      slidesPerView: 4,
      on: {
        init: function () {
          centerCard();
        },
        resize: function () {
          centerCard();
        },
      },
    },
  },
});

/* ************************************************** CARD HOVER ************************************************** */
function centerCard() {
  var swiperSlides = document.querySelectorAll(".swiper-slide");
  swiperSlides.forEach(function (slide) {
    if (window.innerWidth <= 1440) {
      slide.classList.add("text-center");
    } else {
      slide.classList.remove("text-center");
    }
  });
}

window.addEventListener("resize", centerCard);
window.addEventListener("load", centerCard);

/* ************************************************** TRANSISI HALAMAN ************************************************** */
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".transition-link");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");

      document.body.classList.add("zoom-out");

      setTimeout(function () {
        window.location.href = href;
      }, 500);
    });
  });
});

/* ************************************************** SCROLL BUTTON ************************************************** */
var mybutton = document.getElementById("scrollToTopBtn");

// Ketika pengguna scroll ke bawah 20px dari atas dokumen, tampilkan tombol
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Ketika pengguna mengklik tombol, scroll ke atas dari dokumen
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0; // Untuk Safari
  document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE dan Opera
});

/* ************************************************** Modal Image ************************************************** */
document.addEventListener("DOMContentLoaded", function () {
  var modalTriggers = document.querySelectorAll(".modal-trigger");
  var closeButtons = document.querySelectorAll(".close");

  // Show modal
  modalTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var targetId = this.getAttribute("data-target");
      var modal = document.querySelector(targetId);
      var modalImg = modal.querySelector(".modal-content");
      var captionText = modal.querySelector(".caption");

      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.textContent = this.alt; // Update caption text with image's alt text
    });
  });

  // Hide modal
  closeButtons.forEach(function (span) {
    span.addEventListener("click", function () {
      var targetId = this.getAttribute("data-target");
      var modal = document.querySelector(targetId);
      modal.style.display = "none";
    });
  });

  // Close modal when clicking outside of it
  window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  };
});
