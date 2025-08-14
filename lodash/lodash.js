const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "Node.js" },
  { label: "React" },
  { label: "Vue" },
  { label: "Next.js" },
  { label: "Mobx" },
  { label: "Redux" },
  { label: "React Router" },
  { label: "GraphQl" },
  { label: "PostgreSQL" },
  { label: "MongoDB" },
];

const listEi = document.querySelector(".js-list");
const inputEl = document.querySelector ("#filter")

const createListMarkup = (arr) => {
 const markup = arr.map(item =>`<li>${item.label}</li>`).join("")
 return markup 
}
console.log(document.querySelector("label").innerHTML);

listEi.innerHTML = createListMarkup(tech);

const onInputChange = (e) => {
  
  const filterValue = e.target.value.toLowerCase();
  
  const filteredItems = tech.filter((item) =>
    item.label.toLowerCase().includes(filterValue)
  );

  listEi.innerHTML = createListMarkup(filteredItems);
}

console.dir(_);

inputEl.addEventListener("input", _.debounce(onInputChange, 300));