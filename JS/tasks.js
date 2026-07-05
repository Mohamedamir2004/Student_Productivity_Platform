// 30-06-2026 
// tasks add  
// these for dropdown 
const sortList = document.querySelector(".sortlist")
const sortListItem = document.querySelector(".sortlistitem") 

sortList.addEventListener("click",()=>{
    sortListItem.classList.toggle("active")
}) 

// first element selections 
const userInput = document.querySelector('#addinput')
const addbtn = document.querySelector(".addbtn")   
// taskappenditems because of their append 
const taskappendItems = document.querySelector(".taskappenditems") 
// same like above that
const tasklistContent = document.querySelector(".tasklistcontent") 
const taskPendingCount = document.querySelector(".taskheadtitle > span") 

// for date format 
const day = new Date()  
const date = day.toLocaleDateString("en-US" ,
        {
            day:"2-digit" ,
            year:"numeric" ,
            month:"long" ,

        }
    )
    const time = day.toLocaleTimeString("en-US",{
        hour:"numeric" ,
        minute:"2-digit", 
        hour12:true
    }) 

// stores todos as 

let defaultTodos = [
    {
        title: "Submit methodology draft for review",
        time:  `${date} , ${time}` ,
        category: "Research",
        completed: false
    },
    {
        title: "Analyze data set from Survey-B",
        time: `${date} , ${time}` ,
        category: "Analysis",
        completed: false
    },
    {
        title: "Library meeting with Dr. Sarah",
        time:  `${date} , ${time}` ,
        category: "Meeting",
        completed: false
    },
    {
        title: "Purchase lab equipment reagents",
        completed: true
    },
    {
        title: "Register for winter symposium",
        completed: true
    }
]
// get data from local storage 
const STORAGE_KEY = "todos"
const getData = ()=>{
    const savedTodos = localStorage.getItem(STORAGE_KEY) 
    if(savedTodos){
        return JSON.parse(savedTodos)
    }
    return defaultTodos
} 
// save the data on local storage
const loadData = (tasks)=>{
    localStorage.setItem(STORAGE_KEY,JSON.stringify(tasks))
}
let todos = getData()
const addTodos = (pending="pending")=>{ 

    // in static i will erase because i will append so already append then erase in broeswer 
    taskappendItems.innerHTML = ""
    // pending and completed is filtered

    const pendingTodos = todos.filter(todo => !todo.completed)
    const completedTodos = todos.filter(todo => todo.completed)  

    let defaultTodos  = pendingTodos 
    if(pending ==="completed") {
        defaultTodos = completedTodos 
    }
    // total length 
    taskPendingCount.textContent = defaultTodos.length 

    // change into dom and append it 
    defaultTodos.forEach((todo)=>{
        // create the elements 
        const task = document.createElement("section") 
        task.className = "taskappenditem" 

        if(todo.completed){
            task.style.backgroundColor = "#dcfce7" 
        }
        task.innerHTML = `
            <input type="checkbox" class="appendinputs" ${todo.completed ? "checked" : ""}>
            <section class="taskappendcontents">
            <h2>${todo.title}</h2>
            <span class="material-symbols-outlined">calendar_today</span>
            <!-- the Logical or if empty or null means second one is loaded -->
            <span>${todo.time || "Completed"}</span>
            <span>${todo.category || "Done"}</span>
            </section>
        `;
        taskappendItems.appendChild(task) 
        const checkBox = task.querySelector("input")
        checkBox.addEventListener("change",()=>{
            todo.completed = checkBox.checked // true or false 
            // console.log(todo) 
            loadData(todos)
            addTodos()
})
    }) 

    // for completions 
    completedAddTodos(completedTodos)

}

// completed todos 
const completedAddTodos = (completedTodos) =>{
    tasklistContent.innerHTML = 
    `<section class="tasklisthead">
    <h2>
        Completed
    </h2>
    <p>Clear All</p>
    </section>
    `

    // create the elements
    completedTodos.forEach((todo)=>{
        const taskCompletedSection = document.createElement("section") 
        taskCompletedSection.className = 'tasklistcompleted' 
        taskCompletedSection.style.backgroundColor = "#dcfce7"
        taskCompletedSection.innerHTML = 
        `
        <input type="checkbox" class="appendinputs" checked>
        <h2>${todo.title}</h2>
        
        ` 
        tasklistContent.appendChild(taskCompletedSection)  
        const checkBox = taskCompletedSection.querySelector("input") 
        checkBox.addEventListener("change",()=>{
            todo.completed = checkBox.checked // true or false 
            loadData(todos)
            addTodos()
}) 
const clearAll = document.querySelector(".tasklisthead > p") 
    if(clearAll){
        clearAll.addEventListener("click",()=>{
        todos = todos.filter((todo)=> !todo.completed) 
        loadData(todos)
        addTodos()
    })

    }
    }) 
}
addbtn.addEventListener("click",()=>{
    const inputValue = userInput.value.trim() 
    const day = new Date()  
    const date = day.toLocaleDateString("en-US" ,
        {
            day:"2-digit" ,
            year:"numeric" ,
            month:"long" ,

        }
    )
    const time = day.toLocaleTimeString("en-US",{
        hour:"numeric" ,
        minute:"2-digit", 
        hour12:true
    }) 

    const choices = ["Research" , "Analytics" , "Meeting" , "developer" , "Entertainment"] 
    // math.random is generated from 0 to 1 but in decimal like 0.1,0.2 to 1.9 
    // mutliply by list length so that if multiply random number 0.5 * 3 = 1.5 
    // then converted full whole number that is 1
    const oneChoices = choices[Math.floor(Math.random() * choices.length)]

    if(inputValue === ""){
        alert("Please fill the inputs otherwise the tasks not added")
    }
    todos.push(
        {
            title:inputValue,
            time: `${date} , ${time}` ,
            category: oneChoices , 
            completed:false
        }
    )
    userInput.value = ""
    loadData(todos)
    addTodos()
})
// filter data 
sortListItem.addEventListener("click",(event)=>{
    // behaviour based on filter and event textcontent 
    const value = event.target.textContent.trim().toLowerCase() 
    if(value ==="completed"){
        addTodos("completed")
    }
    if(value === "pending") {
        addTodos("pending")
    }
    if(value === "ongoing"){
        addTodos("ongoing")
    }

})

addTodos() 