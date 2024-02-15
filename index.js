/*
Challenge:
Make it so that when you click the 'Add to cart' button, whatever is written in the input field should be console logged.
*/
const inputField = document.getElementById("input-field")
const addButton = document.getElementById("add-button")

addButton.addEventListener("click", function() {
    let inputValue = inputField.value
    console.log(inputValue)
})