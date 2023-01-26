let main = document.getElementById('main')

main.addEventListener('click', ()=>{
    document.body.style.backgroundColor='black'
    document.getElementById('titre').style='-webkit-text-stroke: 1px white;'
    document.getElementById('mouse').style.backgroundColor='white'

    let span = document.getElementsByTagName('span')
    for(let i=0; i<span.length; i++)
        span[i].classList.add('blanc')
})