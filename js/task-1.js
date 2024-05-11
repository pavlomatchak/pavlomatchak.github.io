const list = document.getElementById('categories');
const categories = list.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  console.log(`Category: ${category.querySelector('h2').innerText}`);
  console.log(`Elements: ${category.querySelectorAll('li').length}`)
});
