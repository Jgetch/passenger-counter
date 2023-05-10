let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

//initialise count
let count = 0;

//when clicked, incrememnt count
function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let savedString = ` - ${count}`;
  saveEl.textContent += savedString;
  countEl.textContent = 0;
  count = 0;
}
