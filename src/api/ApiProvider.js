export const getProducts = async () => {
    return await fetch("http://64.226.66.94/api/products/")
}

export const getCategories = async () => {
    return await fetch("http://64.226.66.94/api/categories/")
}

// export const getCategory = async (id) => {
//     return await fetch(`http://64.226.66.94/api/categories/${id}`)
// }