const correctPin = "250526";

let entered = "";

const pinDisplay =
document.getElementById("pinDisplay");

const keypad =
document.getElementById("keypad");

const flash =
document.getElementById("flash");

const message =
document.getElementById("message");

const bgMusic =
document.getElementById("bgMusic");

const clickSound =
document.getElementById("clickSound");

const unlockSound =
document.getElementById("unlockSound");

const burstSound =
document.getElementById("burstSound");

const finalMessage =
`Terima kasih sudah hadir
dan menjadi rumah paling nyaman
di hidupku.

Happy Anniversary ❤️`;

function renderPin(){

  const slots =
  Array(6).fill("_");

  entered.split("").forEach((v,i)=>{
    slots[i]=v;
  });

  pinDisplay.textContent =
  slots.join(" ");
}

const flowerImages = [
  "assets/images/flower1.png",
  "assets/images/flower2.png",
  "assets/images/flower3.png",
  "assets/images/flower4.png",
  "assets/images/flower5.png"
];

function flowerScreenTransition(){

  const total = 220;

  for(let i = 0; i < total; i++){

    const flower =
    document.createElement("img");

    flower.src =
    flowerImages[
      Math.floor(
        Math.random() *
        flowerImages.length
      )
    ];

    flower.className =
    "flower-particle";

    const size =
    150 + Math.random() * 200;

    const startX =
    Math.random() * window.innerWidth;

    const delay =
    Math.random() * 1200;

    const duration =
    2600 + Math.random() * 2200;

    const rotate =
    (Math.random() * 360) - 180;

    flower.style.width =
    size + "px";

    flower.style.left =
    startX + "px";

    flower.style.top =
    (-200 - Math.random() * 400) + "px";

    flower.style.opacity = "0";

    document.body.appendChild(flower);

    flower.animate([

      {
        transform:
        `translateY(0px)
        rotate(0deg)
        scale(.8)`,

        opacity:0
      },

      {
        transform:
        `translateY(${window.innerHeight * .35}px)
        rotate(${rotate * .5}deg)
        scale(1.1)`,

        opacity:1,

        offset:.25
      },

      {
        transform:
        `translateY(${window.innerHeight + 400}px)
        rotate(${rotate}deg)
        scale(1)`,

        opacity:1
      }

    ],{

      duration:duration,

      delay:delay,

      easing:"cubic-bezier(.16,1,.3,1)",

      fill:"forwards"
    });

    setTimeout(()=>{
      flower.remove();
    },duration + delay + 500);
  }
}

let particleInterval;

function romanticParticles(){

  const flowerImages = [
    "assets/images/flower1.png",
    "assets/images/flower2.png",
    "assets/images/flower3.png",
    "assets/images/flower4.png",
    "assets/images/flower5.png"
  ];

  const colors = [
    "#ff8fcf",
    "#ffb3e6",
    "#d896ff",
    "#c77dff"
  ];

  particleInterval = setInterval(()=>{

    // FLOWER
    const flower =
    document.createElement("img");

    flower.src =
    flowerImages[
      Math.floor(
        Math.random() *
        flowerImages.length
      )
    ];

    flower.className =
    "small-flower";

    const size =
    20 + Math.random() * 35;

    const startX =
    Math.random() *
    window.innerWidth;

    const duration =
    5000 + Math.random() * 4000;

    const rotate =
    (Math.random() * 360) - 180;

    flower.style.width =
    size + "px";

    flower.style.left =
    startX + "px";

    document.body.appendChild(flower);

    flower.animate([

      {
        transform:
        `translateY(-100px)
        rotate(0deg)`,

        opacity:0
      },

      {
        opacity:1,
        offset:.1
      },

      {
        transform:
        `translateY(${window.innerHeight + 150}px)
        translateX(${Math.random()*120-60}px)
        rotate(${rotate}deg)`,

        opacity:.9
      }

    ],{

      duration:duration,

      easing:"linear",

      fill:"forwards"
    });

    setTimeout(()=>{
      flower.remove();
    },duration);

    // PARTICLE
    for(let j = 0; j < 12; j++){
    const spark =
    document.createElement("div");

    spark.className =
    "spark-particle";

    const sparkSize =
    4 + Math.random() * 8;

    spark.style.width =
    sparkSize + "px";

    spark.style.height =
    sparkSize + "px";

    spark.style.background =
    colors[
      Math.floor(
        Math.random() *
        colors.length
      )
    ];

    spark.style.left =
    Math.random() *
    window.innerWidth + "px";

    spark.style.top =
    Math.random() *
    window.innerHeight + "px";

    document.body.appendChild(spark);

    const floatX =
    (Math.random() * 160) - 80;

    const floatY =
    (Math.random() * 200) - 100;

    const sparkDuration =
    2500 + Math.random() * 2500;

    spark.animate([

      {
        transform:
        "translate(0,0) scale(0)",

        opacity:0
      },

      {
        opacity:.8,
        offset:.2
      },

      {
        transform:
        `translate(${floatX}px,${floatY}px)
        scale(1.6)`,

        opacity:0
      }

    ],{

      duration:sparkDuration,

      easing:"ease-out",

      fill:"forwards"
    });

    setTimeout(()=>{
      spark.remove();
    },sparkDuration);

    }},450);
}

function unlockSequence(){

  unlocked = true;

  unlockSound.play();

  burstSound.play();

  flash.classList.add("show");

  const scene =
  document.getElementById("scene");

  scene.classList.add("hide-ui");

  document.getElementById("badge")
  .innerText = "opened";

  const gift =
  document.querySelector(".gift-image");

  gift.style.transform =
  "scale(1.15) rotate(-6deg)";

  gift.style.filter =
  "brightness(1.25) saturate(1.2)";

  setTimeout(()=>{

    flowerScreenTransition();

  },200);

  setTimeout(()=>{

    message.classList.add("show");

    romanticParticles();

  },1800);

    bgMusic.volume = 0;

    bgMusic.play();

    let vol = 0;

    const fade = setInterval(()=>{

    vol += 0.02;

    if(vol >= 0.5){
        vol = 0.5;
        clearInterval(fade);
    }

    bgMusic.volume = vol;

    },120);
}

keypad.addEventListener("click",(e)=>{

  const btn =
  e.target.closest("button");

  if(!btn) return;

  clickSound.currentTime = 0;
  clickSound.play();

  const key =
  btn.dataset.key;

  const action =
  btn.dataset.action;

  if(action === "clear"){

    entered = entered.slice(0,-1);

    renderPin();

    return;
  }

  if(action === "enter"){

    if(entered === correctPin){

      unlockSequence();

    }else{

      entered = "";

      renderPin();

      pinDisplay.animate([
        {transform:"translateX(-6px)"},
        {transform:"translateX(6px)"},
        {transform:"translateX(0)"}
      ],{
        duration:300
      });
    }

    return;
  }

  if(entered.length < 6){

    entered += key;

    renderPin();
  }
});

renderPin();

const videoScene =
document.getElementById("videoScene");

const memoryVideo =
document.getElementById("memoryVideo");

nextButton.addEventListener("click",()=>{

  // hide surat
  message.style.opacity = "0";

  setTimeout(()=>{

    message.style.display = "none";

    // show video scene
    videoScene.classList.add("show");

    memoryVideo.play();

    setTimeout(()=>{

        videoScene.scrollTop = scrollAmount;;

        autoScrollVideos();

        },1800);

  },1000);

});

const finalButton =
document.getElementById("finalButton");

const finalScene =
document.getElementById("finalScene");

finalButton.addEventListener("click",()=>{

  videoScene.style.opacity = "0";

  setTimeout(()=>{

    videoScene.style.display = "none";

    finalScene.classList.add("show");

  },1200);

});

function autoScrollVideos(){

  const maxScroll =
    videoScene.scrollHeight -
    videoScene.clientHeight;

  let current = 0;

  const speed = 0.4;

  function scrollStep(){

    current += speed;

    videoScene.scrollTop = current;

    if(current < maxScroll){

      requestAnimationFrame(scrollStep);

    }

  }

  requestAnimationFrame(scrollStep);

}