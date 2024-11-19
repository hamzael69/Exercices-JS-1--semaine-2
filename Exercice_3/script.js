let relache = document.querySelector('#lastname')

relache.addEventListener('input', handleRelacheKey)

function handleRelacheKey(){
    alert(relache.value)
}