const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



// const list = document.querySelector("#ingredients");
// const vegetables = ingredients.map(ingridient => `<li><p class="item">${ingridient}</p></li>`).join('');
// list.insertAdjacentHTML("beforeend", vegetables)
// console.dir(list);

const list = document.querySelector("#ingredients");
const vegetables = ingredients.map(ingredient => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = ingredient;
  return li
});
list.append(...vegetables)
