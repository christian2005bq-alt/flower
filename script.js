const garden = document.querySelector('.flowers');

function createFlower(number) {
  const flower = document.createElement('div');
  flower.className = `flower flower--${number}`;
  const petals = document.createElement('div');
  petals.className = `flower__leafs flower__leafs--${number}`;

  for (let i = 1; i <= 4; i += 1) {
    const petal = document.createElement('div');
    petal.className = `flower__leaf flower__leaf--${i}`;
    petals.append(petal);
  }

  const center = document.createElement('div');
  center.className = 'flower__white-circle';
  petals.append(center);

  for (let i = 1; i <= 8; i += 1) {
    const sparkle = document.createElement('div');
    sparkle.className = `flower__light flower__light--${i}`;
    petals.append(sparkle);
  }

  const stem = document.createElement('div');
  stem.className = 'flower__line';
  for (let i = 1; i <= (number === 1 ? 6 : 4); i += 1) {
    const leaf = document.createElement('div');
    leaf.className = `flower__line__leaf flower__line__leaf--${i}`;
    stem.append(leaf);
  }

  flower.append(petals, stem);
  return flower;
}

for (let i = 1; i <= 3; i += 1) {
  garden.append(createFlower(i));
}

for (const side of ['left', 'right']) {
  const grass = document.createElement('div');
  grass.className = `grass grass--${side}`;
  grass.setAttribute('aria-hidden', 'true');
  for (let i = 0; i < 7; i += 1) {
    const blade = document.createElement('span');
    blade.style.setProperty('--i', i);
    grass.append(blade);
  }
  garden.append(grass);
}

window.onload = () => {
  document.body.classList.remove('container');
};
