// LE SCROLL
const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    mobile: {
        smooth: true,
    },
    tablet: {
        smooth: true
    }
})



jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.4
});


// LA SOURIS

let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

    
     innerCursor.style.left = `${x}px`;
     innerCursor.style.top = `${y}px`;
     outerCursor.style.left = `${x}px`;
     outerCursor.style.top = `${y}px`;
}

// LE ZOOME DU CERCLE
let texts = Array.from(document.querySelectorAll("a"));

console.log(texts);

texts.forEach((text) =>{
    text.addEventListener('mouseover', () =>{
        innerCursor.classList.add("grow");
    });
    text.addEventListener('mouseleave', () =>{
        innerCursor.classList.remove("grow");
    });
});


