var image = document.querySelector("#sun");
var btn = document.querySelector("#btn");
var title = document.querySelector(".title");
var nav = document.querySelector(".navigate");
var tl = gsap.timeline();
// console.log(btn);
function hover() {
    btn.addEventListener("mouseenter", function () {
        image.classList.add("rolling");
        image.style.scale = "1.1";
    })
    btn.addEventListener("mouseleave", function () {
        image.style.scale = "1";
    })
    btn.addEventListener("click", function () {
        image.style.scale = "1.6";
        tl.to(btn, {
            y: "-160%",
            duration: 0.4
        })

            .to(btn, {
                display: "none",
            }, 'a')

            .to(".arrow", {
                margin: 0,
                duration: 2
            }, 'a')

            .to(".fill", {
                width: "100%",
                duration: 3,
                delay: 0.6
            })

            .to(".chakra,.range,.loader", {
                y: "-100%",
                duration: 1.6,
                ease: "expo.inOut",
                display: "none",
            })
            .from(".loader1", {
                y: "100%",
                opacity: 1,
                duration: 0.8,
                ease: "expo.inOut",
            })
            .to(".font_cont img,.font_cont .btm", {
                opacity: 1,
                duration: 1
            })
    })
}
hover();

function parallax() {
    document.addEventListener("mousemove", function (dets) {
        var font2 = document.querySelector("#font2");
        const speed = font2.getAttribute('data-speed');
        const x = (window.innerWidth - dets.pageX * speed) / 100;
        const y = (window.innerHeight - dets.pageY * speed) / 100;
        font2.style.transform = `translateX(${x}px) translateY(${y}px)`;

        const speed1 = nav.getAttribute('data-speed');
        const x1 = (window.innerWidth - dets.pageX * speed1) / 100;
        const y1 = (window.innerHeight - dets.pageY * speed1) / 100;
        nav.style.transform = `translateX(${x1}px) translateY(${y1}px)`;

        const speed3 = title.getAttribute('data-speed');
        const x2 = (window.innerWidth - dets.pageX * speed3) / 100;
        const y2 = (window.innerHeight - dets.pageY * speed3) / 100;
        title.style.transform = `translateX(${x2}px) translateY(${y2}px)`;
    })
}
parallax();

var tl1 = gsap.timeline();
nav.addEventListener("click", function () {
    tl1.to(".loader1", {
        width: "0%",
        duration: 1.4,
        ease: "expo.inOut"
    },'load')
        .to(".page1",{
            width:"100%",
            duration:1.4,
            ease:"expo.inOut",
            opacity:1,
        },'load')
        .to(".circle",{
            rotate:"0deg",
            duration:1,
            delay:1,
            ease:"expo.inOut"
        })
})

var dots = document.querySelectorAll(".dot");
var h3 = document.querySelectorAll(".heading");
var smcircle = document.querySelectorAll(".smcircle");
var page1 = document.querySelector(".page1");
var arr = [
    {
        image:"main2.jpg"
    },
    {
        image:"2.avif"
    },
    {
        image:"3.jpg"
    },
    {
        image:"4.jpg"
    },
    {
        image:"5.jpg"
    }
];


var active = 3;

dots[active-1].style.opacity = 1;
h3[active-1].style.opacity = 1;
smcircle[active-1].style.opacity = 1;

dots.forEach(function(elem,index){
    elem.addEventListener("mouseenter",function(){
        gsap.to(".circle",{
            rotate:(3-(index+1))*10,
            duration:0.6,
            ease:Expo.easeInout
        })

        page1.style.background = `url(${arr[index].image})`;
        page1.style.backgroundRepeat = "no-repeat";
        page1.style.backgroundSize = "cover";
        page1.style.backgroundPosition = "center";

        colordefault();

        gsap.to(this,{
            opacity:1,
        })

        gsap.to(h3[index],{
            opacity:1,
        })

        gsap.to(smcircle[index],{
            opacity:1,
        })

    })
})

function colordefault(){
    gsap.to(".dot",{
        opacity:0.4,
    })

    gsap.to(".heading",{
        opacity:0.4,
    })

    gsap.to(".smcircle",{
        opacity:0.3,
    })
}