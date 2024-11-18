let relache = document.querySelector('#lastname')

relache.addEventListener('keydown', handleRelacheKey)

function handleRelacheKey(event){
    alert(event.key)
}