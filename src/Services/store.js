const beautifyCategory = (name) => {
    if (name === 'jewelry') {
        return 'jewelery'
    } 
    return name
}

export function getProductDetails(category) {
    if (category=== 'books')
        return fetch(`http://localhost:8000/Books`);
    return fetch(`https://fakestoreapi.com/products/category/${beautifyCategory(category)}`)
}

