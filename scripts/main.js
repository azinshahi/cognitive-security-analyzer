// Cognitive Security Analyzer - main.js

console.log("Cognitive Security Analyzer is running.");

// Analyze text input for psychological risk indicators
function analyzeUserBehavior(userInput) {
    if (!userInput) {
        return "Please enter a behavior description.";
    }

    // Convert text to lowercase for easier matching
    const text = userInput.toLowerCase();

    // Simple keyword-based analysis (simulated AI logic)
    const riskyKeywords = ["unknown link", "password", "phish", "click", "share", "email", "urgent", "download"];
    const cautiousKeywords = ["verified", "checked", "secure", "safe", "trusted"];

    let score = 0;

    // Add points for risky behavior
    riskyKeywords.forEach(word => {
        if (text.includes(word)) score += 2;
    });

    // Subtract points for safe behavior
    cautiousKeywords.forEach(word => {
        if (text.includes(word)) score -= 1;
    });

    // Simple feedback based on score
    if (score >= 4) {
        return "⚠️ High Risk: Behavior suggests low cybersecurity awareness.";
    } else if (score >= 2) {
        return "⚠️ Moderate Risk: Behavior shows some risky tendencies.";
    } else {
        return "✅ Low Risk: Behavior indicates good cybersecurity awareness.";
    }
}

// Run the analysis when the button is clicked
function runAnalysis() {
    const input = document.getElementById("userInput").value;
    const result = analyzeUserBehavior(input);
    document.getElementById("result").innerText = result;
}
