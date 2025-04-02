// Function to generate the multiplication table
function generateTable() {
    const number = document.getElementById('number').value;
    const tableContainer = document.getElementById('tableContainer');

    if (number < 1) {
        showModal();
        return;
    }

    // Show loading indicator
    tableContainer.innerHTML = '<p>Loading...</p>';

    setTimeout(() => {
        let tableHTML = '<table>';
        tableHTML += '<tr><th>Multiplier</th><th>Result</th></tr>';

        for (let i = 1; i <= 10; i++) {
            tableHTML += `<tr><td>${number} x ${i}</td><td>${number * i}</td></tr>`;
        }

        tableHTML += '</table>';
        tableContainer.innerHTML = tableHTML;
    }, 500); // Simulate loading time
}

// Function to show the modal
function showModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Add event listener for the Enter key
document.getElementById('number').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        generateTable();
    }
});