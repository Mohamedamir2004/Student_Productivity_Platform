// 29=06-2026 
// select the element 
const refreshBtn = document.querySelector("#refreshbtn")
const playBtn = document.querySelector("#playbtn")
const volumeUpBtn = document.querySelector("#volumeupbtn") 
const timer = document.querySelector(".timingloading > span:first-of-type") 
const fiveMinutesBtn = document.querySelector(".timingfunction:first-of-type")
const tenMinutesBtn = document.querySelector(".timingfunction:nth-of-type(2)")
const twentyFiveMinutesBtn = document.querySelector(".timingfunction:last-of-type") 
// logics is 
// display timer that means HTMl element change 
// first set timer when click the button 5m , 10m , 25m 
// every time changing seconds use the setInterval , and startTimer 

// initial timer 
let selectedMinutes = 25 
let totalSeconds = selectedMinutes * 60 // 1 minutes has the 60 seconds so multiple into 25 then get it 
let timerInterval = null // initially the timer has the timer but not  running timer is setted in initially 
let isRunning = false 

// display timer 
const displayTimer = ()=>{
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    timer.textContent = `${minutes} : ${seconds.toString().padStart(2,"0")}` // minutes : second type pf is seconds and add a 00 after number 
}

// set timer 
const setTimer = (minutes)=>{
    selectedMinutes = minutes
    totalSeconds = selectedMinutes * 60  
    // clear the running timer 
    clearInterval(timerInterval) 
    isRunning = false 
    displayTimer()
}

// running timer 
const runningTimer = ()=>{
    if(isRunning){
        return
    }
    isRunning = true 
    timerInterval = setInterval(()=>{
        if(totalSeconds > 0){
            totalSeconds--
            displayTimer()
        }
        else{
            clearInterval(timerInterval) 
            isRunning = false
        }
    },1000)
}

// eaach button is click then call the function 
// first set and then diplay and then running 
fiveMinutesBtn.addEventListener("click",()=>{
    setTimer(5)
})
tenMinutesBtn.addEventListener("click",()=>{
    setTimer(10)
})
twentyFiveMinutesBtn.addEventListener("click",()=>{
    setTimer(25)
})

// play and refresh button 
playBtn.addEventListener("click",()=>{
    runningTimer()
})
refreshBtn.addEventListener("click",()=>{
    setTimer(selectedMinutes)
})

displayTimer()