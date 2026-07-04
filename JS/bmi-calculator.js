// this is calculate the BMI for health 
let height = document.querySelector("#height")
let weight = document.querySelector("#weight")
const calculateBmiBtn = document.querySelector(".form-control > button") 
const bmiFeedback = document.querySelector(".bmi-feedback")
const resultBoxes = document.querySelector(".result-boxes")
const calculateBMI = ()=>{
    const heightInCm = Number(height.value)
    const weightInKG = Number(weight.value)
    if(!height.value || !weight.value){
        bmiFeedback.innerHTML = `
            
            <span class="material-symbols-outlined">
                cake
            </span>
            <span>
                Please Give a Height & Weight for calculate BMi
            </span>
            
            `
        resultBoxes.style.display = "none" 
        return
    }
    if(heightInCm <= 0 || weightInKG <= 0){
            bmiFeedback.innerHTML = `
            
            <span class="material-symbols-outlined">
                cake
            </span>
            <span>
                Please Give a Valid Height & Weight for calculate BMi
            </span>
            
            `
            resultBoxes.style.display = "none" 
            return
    }   
    // bmi calcuations
    // height is centimeter convert into meters 
    const heightMeter = heightInCm / 100 
    // weight is KG and square of height for if BMi debends on the relative height if usally taller more weight that case increase the height into squares
    /**
     * BMI below 18.5       = Under Weight // not healthy 
     * BMI 18.5 to 24.9     = Normal // normal and healthy 
     * BMI 25 to 29.9       = Over Weight // reduce the weight 
     * BMI 30 and above     = Obese // check the health 

     */
    
    const bmiValue = weightInKG / (heightMeter * heightMeter) 
    const roundBmi = bmiValue.toFixed(1) // decimal number how many timer presents 
    const category = getBmiCategory(bmiValue)
    bmiFeedback.innerHTML = `
    <span class="material-symbols-outlined">
        cake
    </span>
    <span>
        Your BMI is Ready
    </span>
    
    ` 
    resultBoxes.style.display = "flex" 
    resultBoxes.innerHTML = `
    <section class="result-box">
        <span>${roundBmi} </span>
        <span>BMI</span>
    </section>
    <section class="result-box">
        <span> ${category}</span>
        <span>Category</span>
    </section>
    <section class="result-box">
        <span> ${heightInCm} / ${weightInKG} </span>
        <span>CM / KG</span>
    </section>
    
    ` 
    bmiFeedback.appendChild(resultBoxes)

}
// function declarations for hoisting 
function getBmiCategory(bmiValue){
    if(bmiValue < 18.5){
        return "Under Weight"
    }
    else if(bmiValue < 25){
        return "Normal"
    }
    else if (bmiValue < 30){
        return "Over Weight"
    }

    return "Obese" // non healthy bpdy
}

calculateBmiBtn.addEventListener("click",calculateBMI)