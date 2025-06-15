let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
});


// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:0,
//     nav:true,
//     responsive:{
//         0:{
//             items:2
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:6
//         }
//     }
// })

$(document).ready(function() {
    // Khởi tạo Owl Carousel cho phần "Phim Mới Cập Nhật"
    $(".owl-carousel.phim-moi-cap-nhat").owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        nav: false, // Tắt nav mặc định của Owl để dùng custom buttons
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // Khởi tạo Owl Carousel cho phần "Phim Bộ"
    $(".owl-carousel.phim-bo").owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        nav: false, // Tắt nav mặc định của Owl để dùng custom buttons
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // Khởi tạo Owl Carousel cho phần "Hoạt hình"
    $(".owl-carousel.hoat-hinh").owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        nav: false, // Tắt nav mặc định của Owl để dùng custom buttons
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // Phim Mới Cập Nhật
    $(".slider-container").eq(0).find(".owl-prev").click(function () {
        $(".phim-moi-cap-nhat").trigger("prev.owl.carousel");
    });
    $(".slider-container").eq(0).find(".owl-next").click(function () {
        $(".phim-moi-cap-nhat").trigger("next.owl.carousel");
    });
    
    // Phim Bộ
    $(".slider-container").eq(1).find(".owl-prev").click(function () {
        $(".phim-bo").trigger("prev.owl.carousel");
    });
    $(".slider-container").eq(1).find(".owl-next").click(function () {
        $(".phim-bo").trigger("next.owl.carousel");
    });
    
    // Hoạt Hình
    $(".slider-container").eq(2).find(".owl-prev").click(function () {
        $(".hoat-hinh").trigger("prev.owl.carousel");
    });
    $(".slider-container").eq(2).find(".owl-next").click(function () {
        $(".hoat-hinh").trigger("next.owl.carousel");
    });
});






// const nav = document.querySelector(".nav-items")
// const open = document.getElementById("open")
// const close = document.getElementById("close")

// open.addEventListener("click", () => {
//     nav.style.display="flex";
//     nav.style.top="0%"
// })
// close.addEventListener("click", () => {
//     nav.style.top="-110%"
// })
const nav = document.querySelector(".nav-items");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const header = document.querySelector(".header");
const logoLink = document.querySelector(".logo a");

// Mở menu trên di động
openBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Ngăn hành vi mặc định
    e.stopPropagation(); // Ngăn lan truyền sự kiện đến logo
    nav.classList.add("active");
    nav.style.top = "0%";
});

// Đóng menu trên di động
closeBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Ngăn lan truyền
    nav.classList.remove("active");
    nav.style.top = "-110%";
});

// Thêm lớp .scrolled khi cuộn
window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Xử lý nhấp vào liên kết trong menu
document.querySelectorAll('.nav-items a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
    
        // Chỉ chặn nếu là điều hướng nội trang (có "#")
        if (href.startsWith("#")) {
            e.preventDefault();
            e.stopPropagation();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }

            if (window.innerWidth <= 1200) {
                nav.classList.remove("active");
                nav.style.top = "-110%";
            }
        }
    });
});

// Ngăn menu đóng khi nhấp bên trong
nav.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Đóng menu khi nhấp ra ngoài (trừ logo và nút mở)
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1200 && nav.classList.contains('active') && !nav.contains(e.target) && e.target !== openBtn && !logoLink.contains(e.target)) {
        nav.classList.remove("active");
        nav.style.top = "-110%";
    }
});



document.addEventListener('DOMContentLoaded', () => {
    // Toggle dropdown khi click
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.dropdown-menu');
        if (menu) {
            dropdown.addEventListener('click', (e) => {
                e.preventDefault(); // Ngăn chặn hành vi mặc định
                menu.classList.toggle('active');
            });
        }
    });

    // Đóng dropdown khi click ra ngoài
    document.addEventListener('click', (e) => {
        dropdowns.forEach(dropdown => {
            const menu = dropdown.querySelector('.dropdown-menu');
            if (!dropdown.contains(e.target)) {
                menu.classList.remove('active');
            }
        });
    });
});

