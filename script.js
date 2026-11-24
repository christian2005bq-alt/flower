const flowerContainer = document.querySelector(".flower-container");
const MAX_FLOWERS = 12;
const FLOWER_INTERVAL = 1150;
const FLOWER_LIFETIME = 5600;
const PETAL_COUNT = 10;

function createFlower() {
  if (!flowerContainer || flowerContainer.childElementCount >= MAX_FLOWERS) return;

  const flower = document.createElement("div");
  flower.className = "flower";
  flower.style.left = `${Math.random() * 84 + 8}vw`;
  flower.style.top = `${Math.random() * 70 + 15}vh`;
  flower.style.setProperty("--size", `${Math.round(76 + Math.random() * 40)}px`);
  flower.style.setProperty("--sway", `${Math.random() < 0.5 ? -1 : 1}`);
  flower.style.animationDelay = `${Math.random() * 180}ms`;

  const bloom = document.createElement("div");
  bloom.className = "flower__bloom";

  for (let index = 0; index < PETAL_COUNT; index += 1) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.setProperty("--angle", `${index * (360 / PETAL_COUNT)}deg`);
    petal.style.setProperty("--petal-delay", `${index * 35}ms`);
    bloom.appendChild(petal);
  }

  const center = document.createElement("span");
  center.className = "flower__center";
  bloom.appendChild(center);
  flower.appendChild(bloom);
  flowerContainer.appendChild(flower);

  window.setTimeout(() => {
    flower.classList.add("flower--leaving");
    window.setTimeout(() => flower.remove(), 950);
  }, FLOWER_LIFETIME + Math.random() * 1200);
}

// Un pequeño grupo inicial y luego apariciones espaciadas para evitar saltos bruscos.
createFlower();
window.setTimeout(createFlower, 380);
window.setInterval(createFlower, FLOWER_INTERVAL);
