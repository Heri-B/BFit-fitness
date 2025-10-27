function calculateBMI() {
    const feet = parseInt(document.getElementById("feet").value);
    const inches = parseInt(document.getElementById("inches").value);
    const weight = parseInt(document.getElementById("weight").value);

    if (isNaN(feet) || isNaN(inches) || isNaN(weight)) {
        document.getElementById("BMIResult").innerText = "Please enter a valid input";
        return;
    }

    const totalInches = (feet * 12) + inches;
    const bmi = (weight * 703) / (totalInches * totalInches);

    let category = '';
    if (bmi < 18.5) {
        category = "Underweight";
    }
    else if (bmi > 18.4 && bmi < 24.9) {
        category = "Healthy weight";
    }
    else if (bmi > 24.9 && bmi < 29.9) {
        category = "Overweight";
    }
    else {
        category = "Obese";
    }

    document.getElementById("BMIResult").innerText = `Your BMI is ${bmi.toFixed(1)} (${category})`;
}

let totalCalories = 0;
function addCalories() {
    const foodItem = document.getElementById("food").value.trim();
    const calories = parseInt(document.getElementById("calories").value);

    if (!foodItem || isNaN(calories)) {
        alert("Please enter a valid input");
        return;
    }

    const li = document.createElement("li");
    li.textContent = `${foodItem}: ${calories} cal`;
    document.getElementById("calorie-list").appendChild(li);

    totalCalories = totalCalories + calories;
    document.getElementById("calorieTotal").innerText = `Total Calories: ${totalCalories}`;

    document.getElementById("food").value = "";
    document.getElementById("calories").value = "";
}