let frente = document.getElementById("filmes")

let tras = document.querySelector('#modal');

let header = document.querySelector('#head')

frente.addEventListener('click', function()  {
tras.style.display="block",
header.style.display="none"
})

tras.addEventListener('click', function()  {
    tras.style.display="none"
    header.style.display="flex"
    })