var particleNumber = 900;
let windowWidth = $(window).width();

if ((windowWidth < 800) & (windowWidth > 400)) {
  particleNumber = 600;
} else if (windowWidth <= 400) {
  particleNumber = 400;
}

let body = document.getElementById("body-element");

const addNavActive = () => {
  if (body.classList.contains("nav-active"))
    body.classList.remove("nav-active");
  else body.classList.add("nav-active");
};

// handle links with @href started with '#' only
$(document).on("click", 'a[href^="#nav"]', function (e) {
  // target element id
  var id = $(this).attr("href");

  // target element
  var $id = $(id);
  if ($id.length === 0) {
    return;
  }

  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();

  // top position relative to the document
  var pos = $id.offset().top;

  // animated top scrolling
  $("html,body").animate({ scrollTop: pos });
});

// window.onscroll = function() { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementById("fav-logo-innerve").style.height = "4em";
//         document.getElementById("fav-logo-innerve").style.width = "4em";
//     } else {
//         document.getElementById("fav-logo-innerve").style.height = "3em";
//         document.getElementById("fav-logo-innerve").style.width = "3em";
//     }
// }

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    document.getElementById("fav-logo-innerve").style.transform = "scale(1.3)";
    document.getElementById("fav-logo-innerve2").style.transform = "scale(1.1)";
    document.getElementById("fav-logo-innerve3").style.transform = "scale(1.1)";
  } else {
    document.getElementById("fav-logo-innerve").style.transform = "scale(1.3)";
    document.getElementById("fav-logo-innerve2").style.transform = "scale(1.1)";
    document.getElementById("fav-logo-innerve3").style.transform = "scale(1.1)";
  }
}

// hide fav-logo-innerve2 and fav-logo-innerve3 on scroll in mobile view
if (windowWidth < 600) {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      document.getElementById("fav-logo-innerve").style.display = "none";
      document.getElementById("fav-logo-innerve2").style.display = "none";
      document.getElementById("fav-logo-innerve3").style.display = "none";
    } else {
      document.getElementById("fav-logo-innerve").style.display = "block";
      document.getElementById("fav-logo-innerve2").style.display = "block";
      document.getElementById("fav-logo-innerve3").style.display = "block";
    }
  }
}

// countdown

var InnerveDate = new Date("April 14,2023 23:59:59").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var timeLeft = InnerveDate - now;
  // console.log(timeLeft, InnerveDate, now);

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // check if
}, 1000);

const changeFaqIcon = (id) => {
  //console.log(id);
  if (document.getElementById(`${id}-qna-icon`).innerHTML == "+")
    document.getElementById(`${id}-qna-icon`).innerHTML = "-";
  else document.getElementById(`${id}-qna-icon`).innerHTML = "+";
};

// $(document).ready(function () {

//     // process the form
//     $('form').submit(function (event) {
//         var formData = {
//             'email': $('input[name=email]').val(),
//         };
//         $.ajax({
//             type: 'POST',
//             url: 'https://aitoss.club/api/v1/innerveReminder',
//             data: formData,
//             dataType: 'json',
//             encode: true
//         })
//             .done(function (data) {
//                 console.log(data);
//             });
//         event.preventDefault();
//     });

// });

const app = new Vue({
  el: "#app",
  data() {
    return {
      persons: persons,
      selectedPersonIndex: null,
      isSelected: false,
      selectedPerson: null,
      // inlineStyles: null,
      isReady: false,
      isOk: false,
    };
  },
});

// Timeline
var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if (!items[i].classList.contains("in-view")) {
        items[i].classList.add("in-view");
      }
    } else if (items[i].classList.contains("in-view")) {
      items[i].classList.remove("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

// guidelines

$(document).ready(function () {
  // Select the first tab by default

  $("#vertical_tab_nav > ul > li > a").eq(0).addClass("active");
  $("#vertical_tab_nav > div > article").eq(0).css("display", "block");

  // This assigns an onclick event to each tab link("a" tag) and passes a parameter to the showHideTab() function

  $("#vertical_tab_nav > ul").click(function (e) {
    if ($(e.target).is("a")) {
      /*Handle Tab Nav*/
      $("#vertical_tab_nav > ul > li > a").removeClass("active");
      $(e.target).addClass("active");

      /*Handles Tab Content*/
      var clickeindex = $("a", this).index(e.target);
      $("#vertical_tab_nav > div > article").css("display", "none");
      $("#vertical_tab_nav > div > article").eq(clickeindex).fadeIn();
    }

    $(this).blur();
    return false;
  });
}); //end ready

/* Accordian */
$(".tab_heading").click(function () {
  $("article").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).slideDown();

  $(".tab_heading").removeClass("active");
  $(this).addClass("active");

  $("ul.tabs li a").removeClass("active");
  $("ul.tabs li a[rel^='" + activeTab + "']").addClass("active");
});

// FAQs Seletion

/*=============== ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".accordion__item");

// 1. Selecionar cada item
accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".accordion__header");

  // 2. Seleccionar cada click del header
  accordionHeader.addEventListener("click", () => {
    // 7. Crear la variable
    const openItem = document.querySelector(".accordion-open");

    // 5. Llamar a la funcion toggle item
    toggleItem(item);

    // 8. Validar si existe la clase
    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

// 3. Crear una funcion tipo constante
const toggleItem = (item) => {
  // 3.1 Crear la variable
  const accordionContent = item.querySelector(".accordion__content");

  // 6. Si existe otro elemento que contenga la clase accorion-open que remueva su clase
  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    // 4. Agregar el height maximo del content
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};
