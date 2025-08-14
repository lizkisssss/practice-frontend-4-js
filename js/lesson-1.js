const navEl = document.querySelector(".js-nav");

let currentBtn = null;

navEl.addEventListener("click", (event) => {
    if(event.target.nodeName !== "BUTTON") {
        return 
    }

 // 1
//   const activeBtn = document.querySelector(".btn.active");
//   if (activeBtn) {
//     activeBtn.classList.remove("active");
//   }
//  event.target.classList.add("active");

  if (currentBtn){
    currentBtn.classList.remove("active");
  }
  event.target.classList.add("active");
  currentBtn = event.target;

  console.log(event.target.dataset.value);
});

const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);

function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}

const userList = document.getElementById('userList');

function deleteUser(event){
  if(event.target.classList.contains('deleteButton')){
  const listItem = event.target.closest('li');
  if (listItem) {
    userList.removeChild(listItem);
  }
}
}

userList.addEventListener('click', deleteUser);