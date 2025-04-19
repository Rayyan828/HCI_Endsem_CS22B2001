// Feedback system for symptom form
document.getElementById("symptomForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const checked = document.querySelectorAll('input[name="symptom"]:checked');
  const output = document.getElementById("symptomResult");
  if (checked.length > 0) {
    output.textContent = "✅ Symptoms submitted. Stay hydrated and rest!";
  } else {
    output.textContent = "⚠️ Please select at least one symptom.";
  }
});

// Search filter for centers
function filterCenters() {
  const input = document.getElementById("searchCenter").value.toLowerCase();
  const items = document.querySelectorAll("#centerList li");
  items.forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(input) ? "" : "none";
  });
}

// Check-in alert
function checkIn() {
  alert("✅ Health check-in recorded. Thank you!");
}

// Toggle dark mode
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
