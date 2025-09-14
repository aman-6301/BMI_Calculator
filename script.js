// Get the form and result elements from the DOM
const bmiForm = document.getElementById('bmi-form');
const resultDiv = document.getElementById('result');

// Add a submit event listener to the form
bmiForm.addEventListener('submit', (e) => {
    // Prevent the default form submission
    e.preventDefault();

    // Get the weight and height values and units from the form
    const weight = parseFloat(document.getElementById('weight').value);
    const weightUnit = document.getElementById('weight-unit').value;
    const height = parseFloat(document.getElementById('height').value);
    const heightUnit = document.getElementById('height-unit').value;

    // Convert weight and height to standard units (kg and m)
    let weightInKg = convertWeightToKg(weight, weightUnit);
    let heightInM = convertHeightToM(height, heightUnit);

    // Check if the weight and height are valid numbers
    if (weightInKg > 0 && heightInM > 0) {
        // Calculate the BMI
        const bmi = calculateBMI(weightInKg, heightInM);
        // Display the result
        displayResult(bmi);
    } else {
        // Display an error message if the inputs are invalid
        resultDiv.innerHTML = 'Please enter valid weight and height.';
    }
});

// Function to convert weight to kilograms
function convertWeightToKg(weight, unit) {
    switch (unit) {
        case 'kg':
            return weight;
        case 'pounds':
            return weight * 0.453592;
        default:
            return 0;
    }
}

// Function to convert height to meters
function convertHeightToM(height, unit) {
    switch (unit) {
        case 'm':
            return height;
        case 'cm':
            return height / 100;
        case 'in':
            return height * 0.0254;
        case 'ft':
            return height * 0.3048;
        default:
            return 0;
    }
}

// Function to calculate the BMI
function calculateBMI(weight, height) {
    return (weight / (height * height)).toFixed(2);
}

// Function to display the BMI result and category
function displayResult(bmi) {
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    resultDiv.innerHTML = `Your BMI is ${bmi} (${category})`;
}