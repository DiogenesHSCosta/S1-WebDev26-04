
document.getElementById('btn').addEventListener('click', (() =>{
    var num = parseInt(document.getElementById('numero').value)
    console.clear()
    for(i = num; i>0; i--){
       if(num % i == 0){    
            console.log(`O numero ${num} é divisivel por ${i}`)
       }
    }
}))