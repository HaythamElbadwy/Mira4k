let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userPhone = document.getElementById('phone');
let languageSelector = document.querySelectorAll(".language span")
let countryCode;

languageSelector.forEach((e) => {
    e.addEventListener("click", (e) => {
        setLanguage(e.target.innerText), localStorage.setItem("lang", e.target.innerText);
    });
});

const setLanguage = (e) => {
    const t = document.querySelectorAll("[data-translation]");
    (e = "Arabic" == e ? "ar" : "en"),
        t.forEach((t) => {
            const a = t.getAttribute("data-translation");
            t.textContent = translations[e][a];
        }),
        (document.querySelector(".arabic").style.display = "ar" == e ? "none" : "block"),
        (document.querySelector(".english").style.display = "ar" == e ? "block" : "none");
};

document.addEventListener("DOMContentLoaded", function () {
    const whatsappIcon = document.querySelector(".whatsapp-icon");
    const whatsappPopup = document.querySelector(".whatsapp-popup");
    const sendButton = document.querySelector("#sendButton");
    const messageInput = document.querySelector("#messageInput");

    // Toggle WhatsApp popup visibility
    whatsappIcon.addEventListener("click", function () {
        whatsappPopup.classList.toggle("active");
    });

    // Send message via WhatsApp
    sendButton.addEventListener("click", function () {
        const message = messageInput.value.trim();
        if (message) {
            const phoneNumber = "+4571420355"; // Replace with your WhatsApp number
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            sendButton.setAttribute("href", whatsappURL);
        } else {
            alert("Please enter a message before sending.");
        }
    });
});
function closeOffersPopUp() {
    document.getElementById('popup').style.display = 'none '
}



const phoneInput = document.querySelector("#phone");
const iti = window.intlTelInput(phoneInput, {
    initialCountry: "auto", // Auto-detect country
    geoIpLookup: function (callback) {
        fetch('https://ipapi.co/json')
            .then(response => response.json())
            .then(data => callback(data.country_code))
            .catch(() => callback("us"));
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
});

 // Log selected country to console
 phoneInput.addEventListener("countrychange", function() {
    const selectedCountry = iti.getSelectedCountryData();
    countryCode = selectedCountry.dialCode;
    console.log("Selected country:", selectedCountry.dialCode);
});
function closeSubscripePopup() {
    document.getElementById('subscripePopup').classList.add('d-none')
}
function subscripeSucess(){
    document.getElementById('exampleModal').classList.remove('show')
    document.querySelector('.modal-backdrop').classList.remove('show')
    document.getElementById('exampleModal').style.display = 'none'
    document.querySelector('.modal-backdrop').style.display = 'none'
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px";
    document.getElementById('subscripePopup').classList.remove('d-none')
}
function submit() {
    if (validateUserName() == true && validateEmail() == true && validatePhone() == true) {
        let subscribe = {
            name: userName.value,
            email: userEmail.value,
            phone: '+' + countryCode + ' ' + userPhone.value,

        }
        handleSubscribe(subscribe)
        
    } else {
console.log('error');


    }

}


function validateUserName() {
    var regexName = /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/;
    if (regexName.test(document.getElementById('name').value) == true) {
        document.getElementById("wrongName").classList.add("d-none");
        return true
    } else {
        document.getElementById("wrongName").classList.remove("d-none");
        return false
    }
}
function validateEmail() {
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexEmail.test(document.getElementById('email').value) == true) {
        document.getElementById("wrongEmail").classList.add("d-none");
        return true
    } else {
        document.getElementById("wrongEmail").classList.remove("d-none");
        return false
    }
}
function validatePhone() {
    if (document.getElementById('phone').value == '') {
        document.getElementById("phoneAlert").classList.remove("d-none");
        return false
    } else {
        document.getElementById("phoneAlert").classList.add("d-none");
        return true
    }
}

const handleSubscribe = async (subscribe) => {
    document.getElementById('subscribeNow').innerText = 'Loading...'
    try {
      const response = await fetch('https://mira4k.vercel.app/client/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(subscribe)
      });
      const data = await response.json();
      if (response.status === 201) {
        subscripeSucess()
      } else {
       
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please try again.');
    }finally{
        document.getElementById('subscribeNow').innerText = 'Subscribe'
    }
  };


// Partner Slide JS
var swiper = new Swiper(".partner-slide", {
    slidesPerView: 1,
    spaceBetween: 24,
    centeredSlides: false,
    preventClicks: true,
    loop: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        340: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 6,
        },
        1440: {
            slidesPerView: 6,
        },
    }
});

// Testomonial Slide JS
var swiper = new Swiper(".testomonial-slide", {
    slidesPerView: 1,
    spaceBetween: 50,
    centeredSlides: false,
    preventClicks: true,
    autoHeight: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 4,
        },
        1600: {
            slidesPerView: 4.5,
        },
    }
});

// Banner Slide 1 JS
var smoothSwiper = new Swiper(".banner-slide-1", {
    slidesPerView: 1,
    spaceBetween: 0,
    space: 0,
    centeredSlides: false,
    preventClicks: true,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
    speed: 18000,
    direction: 'horizontal',
    zoom: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        340: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2.5,
        },
        1440: {
            slidesPerView: 3,
        },
        1600: {
            slidesPerView: 3,
        },
        1881: {
            slidesPerView: 4,
        },
    }
});

// Banner Slide 2 JS
var smoothSwiper = new Swiper(".banner-slide-2", {
    slidesPerView: 1,
    spaceBetween: 0,
    space: 0,
    centeredSlides: false,
    preventClicks: true,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
    speed: 18000,
    direction: 'horizontal',
    zoom: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        370: {
            slidesPerView: 1.5,
        },
        450: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2.5,
        },
        1440: {
            slidesPerView: 3,
        },
        1600: {
            slidesPerView: 3.5,
        },
    }
});

// Banner Slide 3 JS
var smoothSwiper = new Swiper(".banner-slide-3", {
    slidesPerView: 1,
    spaceBetween: 0,
    space: 0,
    centeredSlides: false,
    preventClicks: true,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
    speed: 18000,
    direction: 'horizontal',
    zoom: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        450: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2.5,
        },
        1440: {
            slidesPerView: 3,
        },
        1600: {
            slidesPerView: 4,
        },
    }
});

// Movies Slide JS
var swiper = new Swiper(".movies-slide", {
    slidesPerView: 1,
    spaceBetween: 24,
    centeredSlides: false,
    preventClicks: true,
    loop: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
        1440: {
            slidesPerView: 6,
        },
    }
});

// Testomonial Slide Two JS
var swiper = new Swiper(".testomonial-slide-two", {
    slidesPerView: 1,
    spaceBetween: 50,
    centeredSlides: false,
    preventClicks: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    navigation: {
        nextEl: ".prev",
        prevEl: ".next",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 2,
        },
        1440: {
            slidesPerView: 2,
        },
        1600: {
            slidesPerView: 2,
        },
    }
});

// Odometer JS
if ("IntersectionObserver" in window) {
    let counterObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                let counter = entry.target;
                let target = parseInt(counter.innerText);
                let step = target / 200;
                let current = 0;
                let timer = setInterval(function () {
                    current += step;
                    counter.innerText = Math.floor(current);
                    if (parseInt(counter.innerText) >= target) {
                        clearInterval(timer);
                    }
                }, 10);
                counterObserver.unobserve(counter);
            }
        });
    });
    let counters = document.querySelectorAll(".counter");
    counters.forEach(function (counter) {
        counterObserver.observe(counter);
    });
}

// Reviews Slide JS
var swiper = new Swiper(".reviews-slide", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    preventClicks: true,
    loop: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    navigation: {
        nextEl: ".prev2",
        prevEl: ".next2",
    },
});

// Explore Speeds Slide JS
var swiper = new Swiper(".explore-speeds-slide", {
    slidesPerView: 1,
    spaceBetween: 24,
    centeredSlides: false,
    preventClicks: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 4,
        },
        1600: {
            slidesPerView: 5,
        },
    }
});

// Explore Speeds Slide JS
var swiper = new Swiper(".explore-speeds-slide", {
    slidesPerView: 1,
    spaceBetween: 24,
    centeredSlides: false,
    preventClicks: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 4,
        },
        1600: {
            slidesPerView: 5,
        },
    }
});

// OTT Platform Slider JS
var SwiperTraveler = new Swiper(".ott-platform-slider", {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    speed: 1000,
    autoHeight: true,
    autoplay: false,
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
});


// OTT Platform Movies Slide 1 JS
var smoothSwiper = new Swiper(".ott-platform-movies-1", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: false,
    preventClicks: true,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
    speed: 18000,
    direction: 'horizontal',
    zoom: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        340: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2.5,
        },
        1440: {
            slidesPerView: 3,
        },
        1600: {
            slidesPerView: 3,
        },
        1881: {
            slidesPerView: 4,
        },
    }
});

// OTT Platform Movies Slide 2 JS
var smoothSwiper = new Swiper(".ott-platform-movies-2", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: false,
    preventClicks: true,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },
    speed: 18000,
    direction: 'horizontal',
    zoom: true,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        370: {
            slidesPerView: 1.5,
        },
        450: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2.5,
        },
        1440: {
            slidesPerView: 3,
        },
        1600: {
            slidesPerView: 3.5,
        },
    }
});

// Movie Home Slider JS
var SwiperTraveler = new Swiper(".movie-home-slider", {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    speed: 1000,
    autoHeight: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    pagination: {
        el: ".movie-home-slider-pagination",
        clickable: true,
    },
});

// ALL Movies Slider JS
var SwiperTraveler = new Swiper(".all-movies-slider", {
    loop: true,
    spaceBetween: 25,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        prevEl: ".movies-button-prev",
        nextEl: ".movies-button-next",
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },
        1600: {
            slidesPerView: 5
        },
    }
});

// MH Movies Slider JS
var SwiperTraveler = new Swiper(".mh-movies-slider", {
    loop: true,
    spaceBetween: 1,
    centeredSlides: true,
    autoplay: false,
    pagination: {
        el: ".mh-movies-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 5
        },
        1200: {
            slidesPerView: 5
        },
    }
});



// Popup Video
$('.popup-video').magnificPopup({
    disableOn: 320,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});

