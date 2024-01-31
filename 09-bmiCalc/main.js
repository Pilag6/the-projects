// Get the elements
const genderSelect = document.getElementById("gender");
const ageInput = document.getElementById("age");
const ageMinusBtn = document.getElementById("age-minus");
const agePlusBtn = document.getElementById("age-plus");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const bmiOutput = document.getElementById("bmi");
const calculateBtn = document.getElementById("calculate-btn");
const resultDiv = document.getElementById("resultText");

// Add event listeners
ageMinusBtn.addEventListener("click", decreaseAge);
agePlusBtn.addEventListener("click", increaseAge);
calculateBtn.addEventListener("click", calculateBMI);

// Function to decrease age
function decreaseAge() {
    if (parseInt(ageInput.value) > 1) {
        ageInput.value = parseInt(ageInput.value) - 1;
    }
}

// Function to increase age
function increaseAge() {
    if (parseInt(ageInput.value) < 120) {
        ageInput.value = parseInt(ageInput.value) + 1;
    }
}

// Function to calculate BMI
function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convert cm to meters

    if (weight && height) {
        const bmi = weight / (height * height);
        bmiOutput.textContent = bmi.toFixed(2);

        let result = "";
        let color, backgroundColor, padding;

        if (isNaN(bmi)) {
            result = "Please enter valid values for height and weight.";
        } else if (bmi < 18.5) {
            result = "Underweight";
            color = "#fa5700";
            backgroundColor = "#fded3a";
            padding = "20px 0";
        } else if (bmi < 25) {
            result = "Normal Weight";
            color = "green";
            backgroundColor = "white";
            padding = "20px 0";
        } else {
            result = bmi < 30 ? "Overweight" : "Obese";
            color = "#fa5700";
            backgroundColor = "#fded3a";
            padding = "20px 0";
        }

        resultDiv.innerHTML = `${result}`;
        resultDiv.style.color = color;
        resultDiv.style.backgroundColor = backgroundColor;
        resultDiv.style.padding = padding;
    }
}
