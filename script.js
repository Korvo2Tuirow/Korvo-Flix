let frente = document.getElementById("carter")

let tras = document.querySelector('#modal');

let header = document.querySelector('#head')

frente.addEventListener('click', function()  {
tras.style.display="flex",
header.style.display="none"
})

tras.addEventListener('click', function()  {
    tras.style.display="none"
    header.style.display="flex"
    })


    