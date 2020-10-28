const helloBtn = document.querySelector('#hello')
const goodbyeBtn = document.querySelector('#goodbye')

helloBtn.addEventListener('click', function(e) {
    console.log('hello')
})

goodbyeBtn.addEventListener('click', function(e) {
    console.log('goodbye')
})