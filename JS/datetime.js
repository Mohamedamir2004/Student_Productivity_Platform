
const time = document.querySelector(".welcometime span:first-child") 
const day = document.querySelector(".day") 
const updateDateTime = ()=>{
    const date = new Date() 
    time.innerHTML = date.toLocaleTimeString("en-US",{
        hour:"2-digit" ,
        minute:"2-digit",
        second:"2-digit" ,
        hour12:true
    })
    day.innerHTML = date.toLocaleDateString("en-US",{
        weekday:"long",
        month:"long" ,
        day:"numeric" ,
        year:"numeric"
    })
}
setInterval(updateDateTime,1000)