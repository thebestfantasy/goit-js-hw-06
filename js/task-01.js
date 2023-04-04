const navEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${navEl.length}`);

navEl.forEach(item => {
    const category = item.firstElementChild;
    const elem = category.nextElementSibling.children;
    console.log(`Category: ${category.textContent}`);
    console.log(`Elements: ${elem.length}`);
})

