// var count = 0; 
// console.log(document)

// //  Select increment and decrement button elements
// var incrementEl = document.querySelector("#increment");
// var decrementEl = document.querySelector("#decrement");
// var countEl = document.querySelector("#count");

// // Updates count on page
// function setCounterText() {
//   countEl.textContent = count;
// }
// // Attach event listener to increment button element
// incrementEl.addEventListener("click", function() {
//   count++;
//   setCounterText();
// });

// // Attach event listener to decrement button element
// decrementEl.addEventListener("click", function() {
//   // Action will fire if count is greater than  0
//   if (count > 0) {
//     count--;
//     setCounterText();
//   }
// });

// var answerOne = Items
// if (answerOne == Items)
// count++;

// Questions will be asked


const Questions = [{
    id: 0,
    q: "Inside which HTML element do we put the JavaScript?",
    a: [{ text: "javascript", isCorrect: false },
        { text: "js", isCorrect: false },
        { text: "<script>", isCorrect: true },
        { text: "<js>", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Where is the correct place to insert a JavaScript?",
    a: [{ text: "In the <head>", isCorrect: false, isSelected: false },
        { text: "In he <body>", isCorrect: false },
        { text: "In the <footer>", isCorrect: false },
        { text: "Either in the <head> or <body>", isCorrect: true }
    ]

},
{
    id: 2,
    q: "How can we write 'Hello' in an alert box?",
    a: [{ text: "alertBox('Hello')", isCorrect: false },
        { text: "msg(Hello)", isCorrect: false },
        { text: "alert('Hello)", isCorrect: true },
        { text: "msgBox(Hello)", isCorrect: false }
    ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

});

const TIME_LIMIT = 50;
let timePassed = 0;
let timeLeft = TIME_LIMIT;

function startTimer() {
  timerInterval = setInterval(() => {
    
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    
    document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
  }, 1000);
}
startTimer()