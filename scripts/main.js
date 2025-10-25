// Cognitive Security Analyzer - Enhanced Version

console.log("Cognitive Security Analyzer is running.");

// Analyze text input for psychological risk indicators
function analyzeUserBehavior(userInput) {
    if (!userInput) {
        return { message: "Please enter a behavior description.", risk: "none" };
    }

    const text = userInput.toLowerCase();

    const riskyKeywords = ["unknown link", "password", "phish", "click", "share", "email", "urgent", "download"];
    const cautiousKeywords = ["verified", "checked", "secure", "safe", "trusted"];

    let score = 0;
    riskyKeywords.forEach(word => {
        if (text.includes(word)) score += 2;
    });
    cautiousKeywords.forEach(word => {
        if (text.includes(word)) score -= 1;
    });

    if (score >= 4) {
        return { message: "⚠️ High Risk: Behavior suggests low cybersecurity awareness.", risk: "high" };
    } else if (score >= 2) {
        return { message: "⚠️ Moderate Risk: Behavior shows some risky tendencies.", risk: "medium" };
    } else {
        return { message: "✅ Low Risk: Behavior indicates good cybersecurity awareness.", risk: "low" };
    }
}

// Update the UI with color-coded feedback
function runAnalysis() {
    const input = document.getElementById("userInput").value;
    const analysis = analyzeUserBehavior(input);

    const result = document.getElementById("result");
    const feedbackBox = document.getElementById("feedbackBox");

    result.innerText = analysis.message;

    // Reset colors
    feedbackBox.style.backgroundColor = "transparent";

    if (analysis.risk === "high") {
        feedbackBox.style.backgroundColor = "#e84118"; // red
    } else if (analysis.risk === "medium") {
        feedbackBox.style.backgroundColor = "#fbc531"; // yellow
        result.style.color = "#000";
    } else if (analysis.risk === "low") {
        feedbackBox.style.backgroundColor = "#4cd137"; // green
    } else {
        result.style.color = "#fff";
    }
}
