const beautifyCategorie = (name) => {
    if (name === 'jewelry') {
        return 'jewelery'
    } 
    return name
}

export function getProductDetails(category) {
    return fetch(`https://fakestoreapi.com/products/category/${beautifyCategorie(category)}`)
}