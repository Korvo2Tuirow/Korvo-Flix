let frente = document.getElementById("filmes")

let tras = document.querySelector('#modal');

frente.addEventListener('click', function()  {
tras.style.zIndex="10"
})

tras.addEventListener('click', function()  {
    tras.style.zIndex="0"
    })