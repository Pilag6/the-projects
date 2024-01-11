/* JAVASCRIP

1- Acces to all the references x
3- Adjust Range lenght ans match it with the input value x
2- All the chars x
4- Generate Password x
5- Add event Listener to button element x

6- Copy password to clipboard
7- Show the password together when load the browser */

const password_el = document.querySelector("#password");
const copyBtn = document.querySelector("#copy");
const inputRangeValue = document.querySelector("#input-range-value");
const spanRangeValue = document.querySelector(".span-range-value");
const lowercase_el = document.querySelector("#lowercase");
const uppercase_el = document.querySelector("#uppercase");
const numbers_el = document.querySelector("#numbers");
const symbols_el = document.querySelector("#symbols");
const generate_btn = document.querySelector("#generate");

// ADJUST RANGE

// console.log(spanRangeValue.textContent)

function adjustLengthRange() {
    spanRangeValue.textContent = inputRangeValue.value;
}

inputRangeValue.addEventListener("input", adjustLengthRange);

// All the chars

const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const uppercase_chars = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
const numbers_chars = "0123456789";
const symbols_chars = "!#@$%&?~()/[]{}";

// PASSWORD GENERATO FUNCTION

function generatePassword() {
    let password = "";
    let lenghtValue = inputRangeValue.value;
    let chars = "";

    // console.log("Lenght Value:", lenghtValue);

    chars += lowercase_el.checked ? lowercase_chars : "";
    chars += uppercase_el.checked ? uppercase_chars : "";
    chars += numbers_el.checked ? numbers_chars : "";
    chars += symbols_el.checked ? symbols_chars : "";

    // console.log("Chars Checked:", chars);

    for (let i = 0; i < lenghtValue; i++) {
        let randomNumbers = Math.floor(Math.random() * chars.length);
        // console.log("Random Number: ", randomNumbers);
        password += chars.slice(randomNumbers, randomNumbers + 1);
    }

    password_el.value = password
}
generate_btn.addEventListener("click", generatePassword);

// generatePassword()

// COPY PASSWORD TO CLIPBOARD

function copyPassword() {
    navigator.clipboard.writeText(password_el.value)
    copyBtn.textContent = "done"

    setTimeout(() => {
        copyBtn.textContent = "content_copy"
    }, 2000)


}

copyBtn.addEventListener("click", copyPassword)

/*
  navigator.clipboard.writeText(copyText.value); 
  */
