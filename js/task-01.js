const categoriesEl = document.querySelectorAll('.item');
console.log(categoriesEl);
const calculateCategories = (items) => {
    let total = 0;
    categoriesEl.forEach((item) => (total += 1));
    return categoriesEl.length;
}
console.log('Number of categories:', categoriesEl.length);