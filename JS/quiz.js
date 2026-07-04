
// question in array format 
const questions = [
    {
        question: "What does the HTML <head> section contain?",
        choices: [
            "Visible page content",
            "Metadata and links to styles/scripts",
            "Only images",
            "Only form fields"
        ],
        correctAnswer: 1
    },
    {
        question: "Which CSS property is used to change text color?",
        choices: [
            "font-size",
            "background-color",
            "color",
            "text-style"
        ],
        correctAnswer: 2
    },
    {
        question: "What is event delegation in JavaScript?",
        choices: [
            "Binding all events directly to window",
            "Using a single listener on a parent for many child events",
            "Creating duplicate listeners for each element",
            "Removing events before adding new ones"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the difference between ‘==’ and ‘===’ in JavaScript?",
        choices: [
            "No difference",
            "‘==’ checks value only, ‘===’ checks type and value",
            "‘===’ checks value only, ‘==’ checks type and value",
            "Only ‘===’ exists"
        ],
        correctAnswer: 1
    },
    {
        question: "Which HTML element defines the largest heading?",
        choices: [
            "&lt;h1&gt;",
            "&lt;h6&gt;",
            "&lt;header&gt;",
            "&lt;title&gt;"
        ],
        correctAnswer: 0
    },
    {
        question: "What is a CSS selector?",
        choices: [
            "A function in JavaScript",
            "A rule that selects HTML elements to style",
            "A type of HTML tag",
            "A browser plugin"
        ],
        correctAnswer: 1
    },
    {
        question: "What does ‘responsive design’ mean?",
        choices: [
            "Design that works only on desktops",
            "Using fixed pixel widths",
            "Design that adjusts layout for different screen sizes",
            "Adding animations to a page"
        ],
        correctAnswer: 2
    },
    {
        question: "Which method adds an item to the end of a JavaScript array?",
        choices: [
            "pop()",
            "push()",
            "shift()",
            "slice()"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of the CSS box model?",
        choices: [
            "To define how colors are applied",
            "To describe element sizing, padding, border, and margin",
            "To manage JavaScript events",
            "To load fonts"
        ],
        correctAnswer: 1
    },
    {
        question: "How do you create a JavaScript function?",
        choices: [
            "function myFunc() {}",
            "def myFunc() {}",
            "func myFunc() {}",
            "create myFunc() {}"
        ],
        correctAnswer: 0
    },
    {
        question: "What does the CSS property display: none do?",
        choices: [
            "Hides the element and removes it from layout",
            "Makes the element invisible but keeps layout space",
            "Adds a hidden scrollbar",
            "Changes text opacity"
        ],
        correctAnswer: 0
    },
    {
        question: "Which HTML tag is used to include an image?",
        choices: [
            "&lt;img&gt;",
            "&lt;image&gt;",
            "&lt;src&gt;",
            "&lt;picture&gt;"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the correct syntax to select an element by ID in CSS?",
        choices: [
            ".idName",
            "#idName",
            "idName",
            "*idName"
        ],
        correctAnswer: 1
    },
    {
        question: "What does DOM stand for?",
        choices: [
            "Document Object Model",
            "Display Object Model",
            "Data Object Manager",
            "Developer Object Model"
        ],
        correctAnswer: 0
    },
    {
        question: "What is a CSS pseudo-class?",
        choices: [
            "A fake CSS file",
            "A selector for a special state of an element",
            "A new HTML tag",
            "A JavaScript class"
        ],
        correctAnswer: 1
    },
    {
        question: "How do you stop an event from bubbling in JavaScript?",
        choices: [
            "event.preventDefault()",
            "event.stopPropagation()",
            "event.cancel()",
            "event.stop()"
        ],
        correctAnswer: 1
    },
    {
        question: "Which HTML attribute is required to make a link?",
        choices: [
            "href",
            "src",
            "alt",
            "title"
        ],
        correctAnswer: 0
    },
    {
        question: "What is an inline element in HTML?",
        choices: [
            "An element that starts on a new line",
            "An element that flows within text and does not break lines",
            "An element used only in scripts",
            "An element that can’t have children"
        ],
        correctAnswer: 1
    },
    {
        question: "Which CSS property changes the spacing between letters?",
        choices: [
            "letter-spacing",
            "word-spacing",
            "line-height",
            "text-indent"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the result of typeof [] in JavaScript?",
        choices: [
            "array",
            "object",
            "list",
            "collection"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the main purpose of CSS Flexbox?",
        choices: [
            "To style forms",
            "To build flexible layouts and align items",
            "To create animations",
            "To connect to an API"
        ],
        correctAnswer: 1
    },
    {
        question: "How do you write a comment in JavaScript?",
        choices: [
            "&lt;!-- comment --&gt;",
            "// comment",
            "/* comment */",
            "Both B and C"
        ],
        correctAnswer: 3
    },
    {
        question: "Which attribute makes an input field required in HTML?",
        choices: [
            "must",
            "required",
            "validate",
            "needed"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a CSS preprocessor?",
        choices: [
            "A browser engine",
            "A tool that adds extra features to CSS before compiling",
            "A JavaScript library",
            "A type of HTML file"
        ],
        correctAnswer: 1
    },
    {
        question: "Which JavaScript keyword declares a block-scoped variable?",
        choices: [
            "var",
            "let",
            "const",
            "Both B and C"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the correct HTML element for playing video?",
        choices: [
            "&lt;video&gt;",
            "&lt;media&gt;",
            "&lt;movie&gt;",
            "&lt;mp4&gt;"
        ],
        correctAnswer: 0
    },
    {
        question: "What does the CSS property position: fixed do?",
        choices: [
            "Positions the element relative to its parent",
            "Positions the element relative to the viewport and stays during scroll",
            "Removes the element from the page",
            "Only works in Internet Explorer"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a promise in JavaScript?",
        choices: [
            "A function that returns immediately",
            "An object representing a future value from an async operation",
            "A type of event listener",
            "A CSS animation"
        ],
        correctAnswer: 1
    },
    {
        question: "Which HTML tag is used to define a table row?",
        choices: [
            "&lt;th&gt;",
            "&lt;tr&gt;",
            "&lt;td&gt;",
            "&lt;table&gt;"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the CSS shorthand property for margin?",
        choices: [
            "margin-box",
            "margin-all",
            "margin",
            "margin-short"
        ],
        correctAnswer: 2
    },
    {
        question: "Which JavaScript statement is used for error handling?",
        choices: [
            "try/catch",
            "do/while",
            "if/else",
            "switch/case"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the main role of the CSS z-index property?",
        choices: [
            "Change the font size",
            "Control stacking order of overlapping elements",
            "Set background color",
            "Define element width"
        ],
        correctAnswer: 1
    },
    {
        question: "Which HTML attribute provides alternative text for an image?",
        choices: [
            "title",
            "alt",
            "caption",
            "label"
        ],
        correctAnswer: 1
    },
    {
        question: "How do you create an object in JavaScript?",
        choices: [
            "const obj = {}",
            "const obj = []",
            "const obj = ()",
            "const obj = ''"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the use of media queries in CSS?",
        choices: [
            "To load external scripts",
            "To apply styles based on screen size or device",
            "To create form validation",
            "To run JavaScript functions"
        ],
        correctAnswer: 1
    },
    {
        question: "Which method converts a JavaScript object to a JSON string?",
        choices: [
            "JSON.stringify()",
            "JSON.parse()",
            "toString()",
            "Object.convert()"
        ],
        correctAnswer: 0
    },
    {
        question: "What does the HTML <section> element represent?",
        choices: [
            "A generic container without meaning",
            "A standalone section of content",
            "A navigation menu",
            "A footer area"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the break-even point of CSS grid?",
        choices: [
            "A layout system for building rows and columns",
            "A system for styling fonts",
            "A way to validate HTML",
            "A tool for server rendering"
        ],
        correctAnswer: 0
    },
    {
        question: "How do you add a class to an HTML element in JavaScript?",
        choices: [
            "element.addClass('name')",
            "element.className = 'name'",
            "element.setAttribute('class','name')",
            "Both B and C"
        ],
        correctAnswer: 3
    },
    {
        question: "What does the CSS property opacity control?",
        choices: [
            "Element visibility transparency",
            "Element width",
            "Text size",
            "Border thickness"
        ],
        correctAnswer: 0
    },
    {
        question: "Which HTML element is used for a dropdown list?",
        choices: [
            "<ul>",
            "<select>",
            "<option>",
            "<list>"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the difference between margin and padding?",
        choices: [
            "Margin is inside the border; padding is outside",
            "Margin is outside the border; padding is inside",
            "They are the same",
            "Padding affects only text"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a single-page application (SPA)?",
        choices: [
            "A web app with only one button",
            "A website that loads once and updates content dynamically without page reloads",
            "A server-side rendered page",
            "A print-only page"
        ],
        correctAnswer: 1
    },
    {
        question: "Which JavaScript keyword prevents a function from being reassigned?",
        choices: [
            "var",
            "let",
            "const",
            "static"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of the <form> element?",
        choices: [
            "Group input controls for data submission",
            "Display images",
            "Add styling rules",
            "Run JavaScript code"
        ],
        correctAnswer: 0
    },
    {
        question: "Which CSS property adds a shadow behind an element?",
        choices: [
            "box-shadow",
            "text-shadow",
            "shadow",
            "border-shadow"
        ],
        correctAnswer: 0
    },
    {
        question: "What is asynchronous JavaScript?",
        choices: [
            "Code that runs in order only",
            "Code that can start now and finish later without blocking the page",
            "A file upload method",
            "A browser-only feature"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the result of 0.1 + 0.2 in JavaScript?",
        choices: [
            "0.3",
            "0.30000000000000004",
            "0.2",
            "1"
        ],
        correctAnswer: 1
    },
    {
        question: "Which HTML tag is used for the main navigation?",
        choices: [
            "<nav>",
            "<menu>",
            "<main>",
            "<header>"
        ],
        correctAnswer: 0
    },
    {
        question: "What does CSS transition do?",
        choices: [
            "Instantly changes styles",
            "Animates changes between values over time",
            "Defines a font family",
            "Adds a new HTML element"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of localStorage in the browser?",
        choices: [
            "Store data only for one page request",
            "Store key/value data that persists across sessions",
            "Store HTML templates",
            "Execute code on the server"
        ],
        correctAnswer: 1
    },
    {
        question: "Which CSS unit is relative to the root font size?",
        choices: [
            "px",
            "em",
            "rem",
            "%"
        ],
        correctAnswer: 2
    },
    {
        question: "What does the HTML <label> element do?",
        choices: [
            "Adds styling to text",
            "Labels a form control and improves accessibility",
            "Creates a link",
            "Displays a tool tip"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a CSS variable?",
        choices: [
            "A JavaScript object",
            "A custom property you can reuse in CSS",
            "A color code",
            "A media query"
        ],
        correctAnswer: 1
    },
    {
        question: "How do you create a new array element in JavaScript?",
        choices: [
            "const x = new Array(1);",
            "const x = []",
            "const x = [1, 2, 3];",
            "All of the above"
        ],
        correctAnswer: 3
    },
    {
        question: "What does the HTML <footer> element represent?",
        choices: [
            "The top of the page",
            "Footer information such as copyright or links",
            "A form container",
            "A list item"
        ],
        correctAnswer: 1
    },
    {
        question: "Which CSS property controls how text wraps?",
        choices: [
            "word-break",
            "text-align",
            "font-family",
            "line-height"
        ],
        correctAnswer: 0
    },
    {
        question: "What is a browser rendering engine?",
        choices: [
            "A server that hosts pages",
            "Software that converts HTML/CSS into pixels on screen",
            "A JavaScript library",
            "A CSS preprocessor"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the use of the HTML <script> tag?",
        choices: [
            "Load CSS styles",
            "Run JavaScript code",
            "Create a new page",
            "Define a table"
        ],
        correctAnswer: 1
    },
    {
        question: "Which JavaScript loop repeats until a condition is false?",
        choices: [
            "for",
            "while",
            "do/while",
            "All of the above"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the main purpose of semantic HTML?",
        choices: [
            "To make the page load faster",
            "To use HTML tags that describe their meaning",
            "To add decorations",
            "To hide content"
        ],
        correctAnswer: 1
    },
    {
        question: "What is a CSS media query breakpoint?",
        choices: [
            "A point where styles change for different screen sizes",
            "A new CSS file",
            "A JavaScript condition",
            "A browser plugin"
        ],
        correctAnswer: 0
    },
    {
        question: "Which function is used to parse a JSON string in JavaScript?",
        choices: [
            "JSON.parse()",
            "JSON.stringify()",
            "parseJSON()",
            "String.parse()"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the default display value for a <div> element?",
        choices: [
            "inline",
            "block",
            "inline-block",
            "none"
        ],
        correctAnswer: 1
    },
    {
        question: "Why should you optimize images for the web?",
        choices: [
            "To improve page load speed and user experience",
            "To make images larger",
            "To remove the need for CSS",
            "To prevent browser cache"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of a CSS grid container?",
        choices: [
            "To define a two-dimensional layout with rows and columns",
            "To style text only",
            "To link to external scripts",
            "To render images faster"
        ],
        correctAnswer: 0
    },
    {
        question: "What is a callback function in JavaScript?",
        choices: [
            "A function that is passed as an argument and executed later",
            "A function that never runs",
            "A function that cancels an event",
            "A function with no name"
        ],
        correctAnswer: 0
    },
    {
        question: "Which HTML element defines a stylesheet?",
        choices: [
            "<style>",
            "<css>",
            "<link>",
            "Both A and C"
        ],
        correctAnswer: 3
    },
    {
        question: "What does the CSS property overflow: hidden do?",
        choices: [
            "Shows all overflow content",
            "Hides content that goes outside the element",
            "Adds scrollbars automatically",
            "Removes the element"
        ],
        correctAnswer: 1
    },
    {
        question: "Which JavaScript keyword creates a promise?",
        choices: [
            "new Promise()",
            "promise = {}",
            "Promise.create()",
            "async()"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the HTML alt attribute on images?",
        choices: [
            "Provide a caption",
            "Improve accessibility and show text when image fails",
            "Cache the image",
            "Make the image responsive"
        ],
        correctAnswer: 1
    },
    {
        question: "How do you select multiple elements in CSS?",
        choices: [
            "element1 + element2",
            "element1, element2",
            "element1 element2",
            "element1 & element2"
        ],
        correctAnswer: 1
    }
];
const questionsTypes = "Front End technologies"
// select the elements  
const quizHeadingTotalQuestion = document.querySelector(".quiz-heading-question > p") 
const quizType = document.querySelector(".quiz-type") 
const quizHeadingScore = document.querySelector(".quiz-heading-score > p") 
const progressBar = document.querySelector(".quiz-progress > progress") 
const question = document.querySelector(".quiz-contentquestions > h2") 
const quizContentChoicesContainer = document.querySelector(".quiz-content-choices")
const choice = document.querySelector(".quiz-content-choice > p") 
const nextButton = document.querySelector(".quiz-content-submit-btn > button")
const quizChoicesTypes = document.querySelector(".quiz-choices-types")

// initialize all 
let currentQuestionIndex = 0 
let selectAnswer = null 
let finishQuiz = false 
let score = 0 

const renderQuiz = ()=>{
    if(currentQuestionIndex >= questions.length){
        completeQuiz()
        return
    }
    // current questions 
    const currentQuestion = questions[currentQuestionIndex] 
    quizType.textContent = questionsTypes 
    quizHeadingTotalQuestion.textContent = `Questions ${currentQuestionIndex + 1} of ${questions.length}` 
    quizHeadingScore.textContent = `${score} / ${questions.length}`
    questionsTypes.textContent = "Multiple Choices" 
    // set the progress value 
    progressBar.value = currentQuestionIndex + 1
    progressBar.max =  questions.length 
    // set the queations 
    question.textContent = `${currentQuestionIndex + 1} . ${currentQuestion.question}` 

    // set the choices 
    quizContentChoicesContainer.innerHTML = ""
    
    currentQuestion.choices.forEach((choice,index)=>{
        const options = document.createElement("section")
        options.className = 'quiz-content-choice' 
        options.innerHTML = `
        <span>${String.fromCharCode(65 + index)}</span>
        <p>${choice}</p>
        ` 

        options.addEventListener("click",() => selectedAnswer(index)) 
        options.addEventListener("keydown",(event)=>{
            if(event.key === "Enter" || event.key === " "){
                event.preventDefault() 
                selectedAnswer(index)
            }
        }) 

        options.setAttribute("tabindex","0")
        options.setAttribute("role","button")
        if(selectAnswer === index){
            options.style.border = "2px solid #2563EB" 
            options.style.backgroundColor = "#dbe3ef" 
        }
        quizContentChoicesContainer.appendChild(options)
    }) 

    // next button clicking 
    nextButton.innerHTML = `Next Questions <span class="material-symbols-outlined">arrow_forward</span>`; 



} 
const selectedAnswer = (index)=>{
    selectAnswer = index 
    renderQuiz()
}
const nextQuestion = ()=>{
    if(finishQuiz){
        currentQuestionIndex = 0
        score = 0 
        selectAnswer = null 
        finishQuiz = false 
        renderQuiz()
        return
    }
    if(selectAnswer === null){
        alert("Pleasse Select the options") 
        // nextButton.classList.add("no-drop")
        return
    }
    if(selectAnswer === questions[currentQuestionIndex] .correctAnswer){
        // nextButton.classList.remove("no-drop")
        score += 1 
    }
    
    currentQuestionIndex += 1 
    selectAnswer = null 
    if(currentQuestionIndex >= questions.length){
        completeQuiz()
    }
    else{
        renderQuiz()
    }
} 
const completeQuiz = ()=>{

        finishQuiz = true;
        questionsTypes.textContent = "Quiz Completed" 
        quizHeadingScore.textContent = `You FInished the Quiz from ${questions.length} questions` 
        quizHeadingScore.textContent = `${score} / ${questions.length}` 
        progressBar.value = questions.length 
        quizChoicesTypes.textContent = "Results is " ; 
        question.textContent = `Your Answer ${score} out of ${questions.length}` 
        quizContentChoicesContainer.innerHTML = `
            <section class="quiz-content-choice">
                <span class="material-symbols-outlined">
                    check
                </span>
                <p>Great effort! Review your answers and try again to improve your score.</p>
            </section> 
        
        `; 
        nextButton.innerHTML = `
        Restart Quiz 
        <span class="material-symbols-outlined">refresh</span>
        `



}
nextButton.addEventListener("click",nextQuestion) 

renderQuiz()