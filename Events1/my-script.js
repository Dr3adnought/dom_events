/*
When the button#counter_btn is clicked, display how many times it has been clicked in the span#click_count
*/

// YOUR CODE GOES HERE
// let incrementing = 0

// function incrementCount() {
//     incrementing++
//     document.getElementById("click_count").innerText = incrementing
// }
// document.getElementById("counter_btn").addEventListener("click", incrementCount)


document.getElementById("counter_btn").addEventListener("click", function() {
    var increment = document.getElementById("click_count").innerText; increment++;
    document.getElementById("click_count").innerText = increment;
})

/*
When the button#reset_btn is clicked, reset the button click counter to 0
*/

// YOUR CODE GOES HERE
document.getElementById("reset_btn").addEventListener("click", function() {
    var reset = document.getElementById("click_count").innerText; increment = 0;
    document.getElementById("click_count").innerText = increment;
})

