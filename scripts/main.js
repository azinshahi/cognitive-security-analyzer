// Cognitive Security Analyzer - Advanced Risk Logic

console.log("Cognitive Security Analyzer is running.");

// Analyze text input for psychological risk indicators
function analyzeUserBehavior(userInput) {
    if (!userInput) {
        return { message: "Please enter a behavior description.", risk: "none" };
    }

    const text = userInput.toLowerCase().trim();

    // Keyword lists
    const highRiskKeywords = [
        "shared password", "clicked", "unknown link", "phish", "downloaded", "email attachment", "gave", "leaked", "opened suspicious"
    ];
    const mediumRiskKeywords = [
        "password", "login", "email", "urgent", "request", "link"
    ];
    const safeKeywords = [
        "verified", "checked", "secure", "safe", "trusted", "complex password", "strong password", "2fa", "two factor"
    ];

    let score = 0;

    // Weighting logic
    highRiskKeywords.forEach(word => {
        if (text.includes(word)) score += 4;
    });

    mediumRiskKeywords.forEach(word => {
        if (text.includes(word)) score += 2;
    });

    safeKeywords.forEach(word => {
        if (text.includes(word)) score -= 3;
    });

    // Clamp score range for consistency
    if (score < 0) score = 0;

    // Determine risk category
    if (score >= 6) {
        return { message: "🔴 High Risk: Behavior indicates a critical human factor vulnerability.", risk: "high" };
    } else if (score >= 3) {
        return { message: "🟡 Moderate Risk: Behavior shows potential awareness gaps.", risk: "medium" };
    } else {
        return { message: "🟢 Low Risk: Behavior reflects strong cybersecurity awareness.", risk: "low" };
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
        result.style.color = "#fff";
    } else if (analysis.risk === "medium") {
        feedbackBox.style.backgroundColor = "#fbc531"; // yellow
        result.style.color = "#000";
    } else if (analysis.risk === "low") {
        feedbackBox.style.backgroundColor = "#4cd137"; // green
        result.style.color = "#fff";
    } else {
        result.style.color = "#fff";
    }
}
