(function () {
  // ... (Keep your existing functions)

  // Smart Onboarding Delay
  if (!localStorage.getItem('seenOnboarding')) {
    setTimeout(() => {
      document.getElementById('onboarding').style.display = 'flex';
      localStorage.setItem('seenOnboarding', 'true');
    }, 1000); // show after 1s
  }

  // Enhanced Chatbot AI Simulation
  const responses = {
    'hello': 'Hi there! How can I support your health today?',
    'symptom': 'Try using the symptom checker to log what you’re feeling.',
    'check-in': 'You can check in anytime using the Dashboard section.',
    'default': 'I’m here to help! Try rephrasing your question.'
  };

  document.getElementById('chatForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const msg = document.getElementById('chatInput').value.trim();
    if (!msg) return;
    appendMessage('You', msg);
    document.getElementById('chatInput').value = '';
    setTimeout(() => {
      const lowerMsg = msg.toLowerCase();
      const key = Object.keys(responses).find(k => lowerMsg.includes(k)) || 'default';
      appendMessage('HealthMate', responses[key]);
    }, 700);
  });

  // Add keyboard accessibility for onboarding
  document.getElementById('onboarding').addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === 'Escape') {
      startOnboarding();
    }
  });

})();
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
