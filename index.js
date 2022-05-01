async function getCategories() {
    const response = await fetch('https://jservice.io/api/categories?count=4&offset=4');
    const data = await response.json();
    return data;
}

function getCategoryHtml(category) {
    return `
        <div class="my-category-title">${category.title}</div>
        <div class="my-category-clue">$100</div>
        <div class="my-category-clue">$200</div>
        <div class="my-category-clue">$300</div>
        <div class="my-category-clue">$400</div>
    `;
}

getCategories().then(categories => {
    document.body.innerHTML =  `
        <div class="board">
            ${categories.map(category => getCategoryHtml(category)).join('')}
        </div>
        `;
}) 