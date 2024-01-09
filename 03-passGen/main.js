/* JAVASCRIP

1- Acces to all the references
3- Adjust Range lenght ans match it with the input value
2- All the chars
4- Generate Password
5- Add event Listener to button element
6- Copy password to clipboard
7- Show the password together when load the browser */

const password_el = document.querySelector("#password")
const copyBtn = document.querySelector("#copy")
const inputRangeValue = document.querySelector("#input-range-value")
const spanRangeValue = document.querySelector(".span-range-value")
const lowercase_el = document.querySelector("#lowercase")
const uppercase_el = document.querySelector("#uppercase")
const numbers_el = document.querySelector("#numbers")
const symbols_el = document.querySelector("#symbols")
const generate_btn = document.querySelector("#generate")

// ADJUST RANGE

// console.log(spanRangeValue.textContent)

function adjustLengthRange() {
    spanRangeValue.textContent = inputRangeValue.value
}

inputRangeValue.addEventListener("input", adjustLengthRange)

