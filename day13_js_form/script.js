document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const table = document.querySelector("table");
    const submitButton = form.querySelector("button[type=submit]");

    let editingRow = null; // Track the row being edited

    // Add table headers
    table.classList.add("table-auto", "border-collapse", "border-2", "border-purple-900", "w-full", "ml-5");
    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    const headers = ["Name", "Age", "Phone Number", "Gender", "Subjects", "Date of Birth", "Location", "Actions"];

    headers.forEach(header => {
        const th = document.createElement("th");
        th.classList.add("border", "border-2", "px-5", "p-2", "bg-purple-300");
        th.textContent = header;
        headerRow.appendChild(th);
    });

    const tbody = table.createTBody();

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Capture form data
        const firstname = document.getElementById("firstname").value;
        
        const midname = document.getElementById("midname").value;
        const lastname = document.getElementById("lastname").value;
        const age = document.getElementById("age").value;
        const phone = document.getElementById("phn").value;
        const dob = document.getElementById("dob").value;
        const location = document.getElementById("location").value;

        // Get selected gender
        let gender = "";
        const genderOptions = document.querySelectorAll("input[type=radio]");
        genderOptions.forEach(option => {
            if (option.checked) {
                gender = option.nextElementSibling.textContent;
            }
        });

        // Get selected subjects
        const subjects = [];
        const subjectOptions = document.querySelectorAll("input[type=checkbox]");
        subjectOptions.forEach(option => {
            if (option.checked) {
                subjects.push(option.nextElementSibling.textContent);
            }
        });

        if (editingRow) {
            // Update the existing row
            editingRow.cells[0].textContent = `${firstname} ${midname} ${lastname}`.trim();
            editingRow.cells[1].textContent = age;
            editingRow.cells[2].textContent = phone;
            editingRow.cells[3].textContent = gender;
            editingRow.cells[4].textContent = subjects.join(", ");
            editingRow.cells[5].textContent = dob;
            editingRow.cells[6].textContent = location;

            // Reset form and editing state
            editingRow = null;
            submitButton.textContent = "Submit";
        } else {
            // Add new row
            const row = tbody.insertRow();
            row.classList.add("bg-purple-200","text:align-center","border-purple-500","border-2");

            const nameCell = row.insertCell();
            nameCell.textContent = `${firstname} ${midname} ${lastname}`.trim();
            nameCell.style.textAlign = "center","border-purple-500","border";

            const ageCell = row.insertCell();
            ageCell.textContent = age;
            ageCell.style.textAlign = "center";

            const phoneCell = row.insertCell();
            phoneCell.textContent = phone;
            phoneCell.style.textAlign = "center","border";

            const genderCell = row.insertCell();
            genderCell.textContent = gender;
            genderCell.style.textAlign = "center";

            const subjectCell = row.insertCell();
            subjectCell.textContent = subjects.join(", ");
            subjectCell.style.textAlign = "center";

            const dobCell = row.insertCell();
            dobCell.textContent = dob;
            dobCell.style.textAlign = "center";

            const locationCell = row.insertCell();
            locationCell.textContent = location;
            locationCell.style.textAlign = "center";

            const actionsCell = row.insertCell();
            actionsCell.classList.add("flex", "space-x-2");
            actionsCell.style.justifyContent = "center";


            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.classList.add("bg-blue-500", "text-white", "px-3", "py-1", "rounded");
            editButton.addEventListener("click", () => editRow(row));
            actionsCell.appendChild(editButton);

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("bg-green-500", "text-white", "px-3", "py-1", "rounded");
            deleteButton.addEventListener("click", () => row.remove());
            actionsCell.appendChild(deleteButton);
        }

        form.reset();
    });

    function editRow(row) {
        editingRow = row;

        const [name, age, phone, gender, subjects, dob, location] = Array.from(row.cells).map(cell => cell.textContent);

        const [firstname, midname, lastname] = name.split(" ");
        document.getElementById("firstname").value = firstname || "";
        document.getElementById("midname").value = midname || "";
        document.getElementById("lastname").value = lastname || "";
        document.getElementById("age").value = age;
        document.getElementById("phn").value = phone;
        document.getElementById("dob").value = dob;
        document.getElementById("location").value = location;

        const genderOptions = document.querySelectorAll("input[type=radio]");
        genderOptions.forEach(option => {
            option.checked = option.nextElementSibling.textContent === gender;
        });

        const subjectOptions = document.querySelectorAll("input[type=checkbox]");
        subjectOptions.forEach(option => {
            option.checked = subjects.split(", ").includes(option.nextElementSibling.textContent);
        });

        submitButton.textContent = "Update";
    }
});



// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.querySelector("#user-form");
//     const table = document.querySelector("table");
//     const tbody = table.createTBody();

//     form.addEventListener("submit", (event) => {
//         event.preventDefault();

//         // Get input values
//         const firstname = document.getElementById("firstname").value.trim();
//         const lastname = document.getElementById("lastname").value.trim();
//         const age = document.getElementById("age").value.trim();
//         const phone = document.getElementById("phn").value.trim();
//         const gender = document.querySelector("input[name='gender']:checked")?.value;
//         const dob = document.getElementById("dob").value.trim();
//         const location = document.getElementById("location").value.trim();
//         const subjects = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map(cb => cb.value);

//         let isValid = true;

//         // Validate fields and show errors
//         isValid = validateField("firstname-error", firstname, "First name is required") && isValid;
//         isValid = validateField("lastname-error", lastname, "Last name is required") && isValid;
//         isValid = validateField("age-error", age && age > 0, "Valid age is required") && isValid;
//         isValid = validateField("phn-error", /^\+\d{2}-\d{10}$/.test(phone), "Invalid phone number (format: +XX-XXXXXXXXXX)") && isValid;
//         isValid = validateField("gender-error", gender, "Gender is required") && isValid;
//         isValid = validateField("subject-error", subjects.length > 0, "Select at least one subject") && isValid;
//         isValid = validateField("dob-error", dob, "Date of birth is required") && isValid;
//         isValid = validateField("location-error", location, "Location is required") && isValid;

//         if (!isValid) return;

//         clearErrors();

//         // Add a new row to the table
//         const row = tbody.insertRow();
//         row.innerHTML = `
//             <td>${firstname} ${lastname}</td>
//             <td>${age}</td>
//             <td>${phone}</td>
//             <td>${gender}</td>
//             <td>${subjects.join(", ")}</td>
//             <td>${dob}</td>
//             <td>${location}</td>
//             <td>
//                 <button class="edit">Edit</button>
//                 <button class="delete">Delete</button>
//             </td>
//         `;

//         // Event Listeners for Edit and Delete
//         row.querySelector(".delete").addEventListener("click", () => row.remove());
//         row.querySelector(".edit").addEventListener("click", () => alert("Edit functionality not implemented."));

//         form.reset();
//     });

//     function validateField(id, condition, errorMessage) {
//         if (!condition) {
//             showError(id, errorMessage);
//             return false;
//         }
//         return true;
//     }

//     function showError(id, message) {
//         const errorElement = document.getElementById(id);
//         if (errorElement) {
//             errorElement.textContent = message;
//         }
//     }

//     function clearErrors() {
//         document.querySelectorAll(".error-message").forEach(span => (span.textContent = ""));
//     }
// });
