// age calulator 

// select the items 
const dateInput  = document.querySelector("#date")
const calculateBtn = document.querySelector(".age-button > button")
const resultBox = document.querySelector(".result-boxes")
const ageContentData = document.querySelector(".age-content-data")

calculateBtn.addEventListener("click",()=>{
    const dob = new Date(dateInput.value) // dob date time format
    const now = new Date() // current date
    
    if(dateInput.value === ""){
        ageContentData.innerHTML = 
        `
        <span class="material-symbols-outlined">
            cake
        </span>
        <span>
            Provide your birth date to calculate exact age
        </span>
        
        `
        return
    }

    if(dob > now){
        ageContentData.innerHTML = 
        `
        <span class="material-symbols-outlined">
            cake
        </span>
        <span>
            Provide your valid birth date to calculate exact age
        </span>
        
        `
        return
    }
    // subtract the year and months & days 
    let year =  now.getFullYear()  - dob.getFullYear() 
    let month = now.getMonth()  - dob.getMonth() 
    let date =now.getDate()  -  dob.getDate()  
      // date is negative then borrow the prevous month 
    if(date < 0){
        month-- ;
        const previousMonthnsDays = new Date(
            now.getFullYear() ,
            now.getMonth() ,
            0 // last date of previous month 
        ).getDate()
        date += previousMonthnsDays // end of get date by subtract
    }
    // if month is negative then borrow the year 
    if(month < 0){
        year--; // less 1 year
        month +=12
    }

    resultBox.style.display ="flex"
    resultBox.innerHTML = 
    `
    <section class="result-box">
        <span>${year} </span>
        <span>Years</span>
    </section>
    <section class="result-box">
        <span>${month}</span>
        <span>Months</span>
    </section>
    <section class="result-box">
        <span>${date} </span>
        <span>Days</span>
    </section>
    
    `
    ageContentData.appendChild(resultBox)

})

            
