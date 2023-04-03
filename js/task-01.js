const navEl = document.querySelectorAll(".item");
console.dir(`Number of categories: ${navEl.length}`);

const category1 = navEl[0].firstElementChild;
console.dir(`Category: ${category1.textContent}`);

const elem1 = category1.nextElementSibling.children.length;
console.dir(`Elements: ${elem1}`);

const category2 = navEl[1].firstElementChild;
console.dir(`Category: ${category2.textContent}`);

const elem2 = category2.nextElementSibling.children.length;
console.dir(`Elements: ${elem2}`);

const category3 = navEl[2].firstElementChild;
console.dir(`Category: ${category3.textContent}`);

const elem3 = category3.nextElementSibling.children.length;
console.dir(`Elements: ${elem3}`);
