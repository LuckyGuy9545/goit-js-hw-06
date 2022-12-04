const findCategory = document.querySelectorAll('.item');
console.log('Number of categories:', findCategory.length);


const newArray = [...findCategory]

    .map(
        element => `Category: ${element.children[0].textContent}
Elements: ${element.children[1].children.length}`)
    .join("\n")

console.log(newArray);

