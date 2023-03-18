const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemEl.length);
    
itemEl.forEach(item => {
    const itemTitle = item.querySelector('h2');
    const itemNumber = item.querySelectorAll('li');
    console.log('Category:', itemTitle.textContent);
    console.log('Elements:', itemNumber.length);
});



