// const imgs = document.getElementById("imgs");
// var userAgent = navigator.userAgent;
// var ie = userAgent.indexOf('MSIE') > -1 || userAgent.indexOf("NET4.0E ") > -1;
// const img = document.querySelectorAll("#imgs img");
// let idx = 0;

// function ckeckbroswer() {
//     if (ie) {

//     } else {

//     }
// }

// function run() {
//     idx++;
//     ckeckbroswer();

//     if (idx > img.length - 1) {
//         idx = 0;
//     }

//     imgs.style.transform = `translateX(${-idx * 600}px)`;
//.break
// }
// setInterval(run, 2000);

// ---------- corousel----------
var Sliderindex, Slider, textCaption, dots;

function initCorousel() {
    Sliderindex = 0;
    Slider = document.getElementsByClassName("image_holder");
    Slider[Sliderindex].style.opacity = "1";

    textCaption = document.querySelector(".captionHolder .text_caption");
    textCaption.innerText = Slider[Sliderindex].querySelector(".image_holder .text_caption").innerText;

    dots = [];
    var dotCon = document.getElementById("dots_Cont");
    for (var i = 0; i < Slider.length; i++) {
        var dot = document.createElement("span");
        dot.classList.add("dots");
        dot.setAttribute("onclick", "SlideCorousel(" + i + ")");
        dotCon.append(dot);
        dots.push(dot);
    }
    dots[Sliderindex].classList.add("active");

}

function plus_Slide(n) {
    SlideCorousel(Sliderindex + n);
}

function SlideCorousel(n) {
    var i, current, next;
    var moveAnimClass = {
        forCurrent: "",
        forNext: ""
    }
    var AnimationText;
    if (n > Sliderindex) {
        if (n >= Slider.length) {
            n = 0;
        }
        moveAnimClass.forCurrent = "moveleftCurrentSlide";
        moveAnimClass.forNext = "moveleftNextSlide";
        AnimationText = "bounceOutLeft";
    } else if (n < Sliderindex) {
        if (n < 0) { n = Slider.length - 1; }
        moveAnimClass.forCurrent = "moveRightCurrentSlide";
        moveAnimClass.forNext = "moveRightNextSlide";
        AnimationText = "bounceOutRight";
    }
    if (n != Sliderindex) {
        next = Slider[n];
        current = Slider[Sliderindex];
        for (i = 0; i < Slider.length; i++) {
            Slider[i].className = "image_holder";
            Slider[i].style.opacity = 0;
            dots[i].classList.remove("active");


        }
        current.classList.add(moveAnimClass.forCurrent);
        next.classList.add(moveAnimClass.forNext);
        dots[n].classList.add("active");
        Sliderindex = n;
    }
    textCaption.style.display = "none";
    textCaption.className = "text_caption";
    textCaption.classList.add(AnimationText);
    textCaption.innerText = Slider[n].querySelector(".image_holder .text_caption").innerText;
    textCaption.style.display = "block";



}
var timmer = null;

function setTimer() {
    timmer = setInterval(function() {
        plus_Slide(1);
    }, 3000)
}

initCorousel();

function playSlider() {
    setTimer();
}

function shopSlider() {
    clearInterval(timmer);
}
// ---------toggle menuitem---------
var menuitems = document.getElementById("menuItems");
menuitems.style.maxHeight = "0px";

function toggleButton() {

    if (menuitems.style.maxHeight == "0px") {
        menuitems.style.maxHeight = "150px";
    } else {
        menuitems.style.maxHeight = "0px";
    }
}