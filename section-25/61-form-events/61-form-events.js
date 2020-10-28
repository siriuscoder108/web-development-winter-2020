const groceryList = document.querySelector("form")
const ul = document.querySelector('ul')

groceryList.addEventListener('submit', function(e) {

    const product = groceryList.elements.product
    const qty = groceryList.elements.qty

    e.preventDefault()

    const li = document.createElement('li')
    li.append(`${qty.value} ${product.value}`)
    ul.append(li)
    product.value = ''
    qty.value = ''
})