const startBtn = document.getElementById("startBtn");
const openLetterBtn = document.getElementById("openLetter");

const envelopeSection =
document.getElementById("envelope-section");

const letterSection =
document.getElementById("letter-section");

const counterSection =
document.querySelector(".counter-section");

const gallerySection =
document.querySelector(".gallery-section");

const loveSection =
document.querySelector(".love-section");

const finalSection =
document.querySelector(".final-section");

const music =
document.getElementById("bgMusic");

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loading-screen")
.style.display="none";

},2500);

});

/* OPEN HEART */

startBtn.addEventListener("click",()=>{

music.play().catch(()=>{});

envelopeSection.style.display="block";

envelopeSection.scrollIntoView({
behavior:"smooth"
});

});

/* LETTER */

const message = `

You are my most beautiful dream.

In a world full of ordinary moments,
you are extraordinary.

The way you laugh,
the way you care,
the way you simply exist,
it fills every corner of my world
with something I never knew I needed.

These flowers aren't enough.

No words can.

But these flowers carry every unspoken feeling
I harbor for you.

Thank you for being in my life.

Even though we used to only know each other,
now we know each other much better.

Very close.

Every conversation,
every laugh,
every moment with you
has become one of my favorite memories.

And no matter how much time passes,
I will always be grateful
that our paths crossed.

Love,

Angga ❤️

`;

openLetterBtn.addEventListener("click",()=>{

letterSection.style.display="block";

typeWriter();

letterSection.scrollIntoView({
behavior:"smooth"
});

setTimeout(()=>{

counterSection.style.display="block";

gallerySection.style.display="block";

loveSection.style.display="block";

finalSection.style.display="block";

},4000);

});

/* TYPEWRITER */

let i = 0;

function typeWriter(){

const target =
document.getElementById("typingText");

target.innerHTML="";

function typing(){

if(i < message.length){

target.innerHTML += message.charAt(i);

i++;

setTimeout(typing,35);

}

}

typing();

}

/* DAYS COUNTER */

const startDate =
new Date("2025-02-01");

const today =
new Date();

const difference =
today - startDate;

const days =
Math.floor(
difference /
(1000*60*60*24)
);

document.getElementById("daysCounter")
.innerHTML = days + " Days ❤️";

/* PETALS */

function createPetal(){

const petal =
document.createElement("div");

petal.classList.add("petal");

petal.innerHTML =
Math.random() > 0.5 ? "🌸" : "💖";

petal.style.left =
Math.random()*100 + "vw";

petal.style.fontSize =
(Math.random()*18 + 15) + "px";

petal.style.animationDuration =
(Math.random()*6 + 6) + "s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,350);

/* LOVE BUTTON */

document
.getElementById("loveButton")
.addEventListener("click",()=>{

for(let i=0;i<40;i++){

setTimeout(()=>{

const heart =
document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=
Math.random()*100+"vw";

heart.style.top=
Math.random()*100+"vh";

heart.style.fontSize=
(Math.random()*25+20)+"px";

heart.style.zIndex="9999";

heart.style.transition="1.5s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=
"translateY(-100px)";

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},1500);

},i*80);

}

alert(
"I Love You Putri ❤️"
);

});
