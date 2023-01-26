let main = document.getElementById('main')
let valeur = 0

main.addEventListener('click', ()=>{
    if(valeur==0){
        document.body.style.backgroundColor='black'
        document.getElementById('titre').style='-webkit-text-stroke: 1px white;'
        document.getElementById('mouse').style.backgroundColor='white'
        let span = document.getElementsByTagName('span')
        for(let i=0; i<span.length; i++)
            span[i].classList.add('blanc')
    } 
    if(valeur==1){
        document.body.style.backgroundColor='white'
        document.getElementById('titre').style='-webkit-text-stroke: 1px black;'
        document.getElementById('mouse').style.backgroundColor='black'
        let span = document.getElementsByTagName('span')
        for(let i=0; i<span.length; i++)
            span[i].classList.remove('blanc')
    }
    valeur = (valeur==0)? 1:0


})