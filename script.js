
document.getElementById('btn').addEventListener('click', (() =>{
    var numero = parseInt(document.getElementById('numero').value)
    var i = 0
    while( numero > 0){
        console.log(numero)
        numero -=1
    }
    console.log(' ')
}))