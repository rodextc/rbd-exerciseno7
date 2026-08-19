// Get the input fields
const firstName = document.getElementById("firstName");
const middleName = document.getElementById("middleName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");

// Get the buttons and records container
const insertBtn = document.getElementById("insertBtn");
const clearBtn = document.getElementById("clearBtn");
const records = document.getElementById("records");

// Get saved records from localStorage
let data = JSON.parse(localStorage.getItem("records")) || [];

// Display records when the page loads
displayRecords();


// INSERT BUTTON
insertBtn.addEventListener("click", function () {

    // Get values from inputs
    const first = firstName.value.trim();
    const middle = middleName.value.trim();
    const last = lastName.value.trim();
    const userAge = age.value.trim();

    // Check if all fields are filled
    if (first === "" || middle === "" || last === "" || userAge === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Create a new record
    const newRecord = {
        firstName: first,
        middleName: middle,
        lastName: last,
        age: userAge
    };

    // Add record to the array
    data.push(newRecord);

    // Save records to localStorage
    localStorage.setItem("records", JSON.stringify(data));

    // Display the updated records
    displayRecords();

    // Clear input fields
    firstName.value = "";
    middleName.value = "";
    lastName.value = "";
    age.value = "";

    // Put cursor back on First Name
    firstName.focus();
});


// CLEAR BUTTON
clearBtn.addEventListener("click", function () {

    // Clear all records
    data = [];

    // Remove records from localStorage
    localStorage.removeItem("records");

    // Update display
    displayRecords();

    // Clear input fields
    firstName.value = "";
    middleName.value = "";
    lastName.value = "";
    age.value = "";

    firstName.focus();
});


// DISPLAY RECORDS
function displayRecords() {

    // If there are no records
    if (data.length === 0) {
        records.innerHTML = '<p style="color: red;">No Records...</p>';
        return;
    }

    // Clear previous display
    records.innerHTML = "";

    // Display every record
    data.forEach(function (record, index) {

        const recordDiv = document.createElement("div");

        recordDiv.innerHTML = `
            <p>
                ${index + 1}. 
                ${record.firstName} 
                ${record.middleName} 
                ${record.lastName} 
                - Age: ${record.age}
            </p>
        `;

        records.appendChild(recordDiv);
    });
}