// calculator js 
const input = document.querySelector("#input")
const opeartionBtn = document.querySelectorAll(".operation") 
const numberBtn = document.querySelectorAll(".controls")
const clearBtn = document.querySelector(".ac-controls") 
const equalsBtn = document.querySelector(".equals")

// each number buttons textcontent into iput.value
numberBtn.forEach((button)=>{
    button.addEventListener("click",()=>{ 
        
        input.value += button.innerText // alternative for textContent 

    })
})
// each number buttons textcontent into iput.value
opeartionBtn.forEach((button)=>{
    button.addEventListener("click",()=>{
        if(!button.classList.contains("equals")){
        input.value += button.innerText // alternative for textContent 
        }

    })
}) 
// claer the input 
clearBtn.addEventListener("click",()=>{
    input.value = "" 
})
equalsBtn.addEventListener("click" , ()=>{
    try{
        let expressions = input.value 
        // i use the entity so its not concerted as operator so replce this by string method
        expressions = expressions.replace("÷", "/")
        expressions = expressions.replace("−", "-")
        expressions = expressions.replace("x", "*")
        input.value = eval(expressions)
        
    }
    catch(error){
        input.value = error
    }
})
