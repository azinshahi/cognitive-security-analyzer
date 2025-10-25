// Cognitive Security Analyzer - Full Updated Version
console.log("Cognitive Security Analyzer is running.");

// Analyze text input for psychological risk indicators
function analyzeUserBehavior(userInput) {
    if (!userInput || userInput.trim() === "") {
        return { message: "Please enter a behavior description.", risk: "none" };
    }

    const text = userInput.toLowerCase();

    // Define keyword categories
    const highRiskKeywords = [
        "shared password",
        "clicked unknown link",
        "opened attachment",
        "gave password",
        "leaked",
        "phish",
        "downloaded malware",
        "suspicious link"
    ];

    const mediumRiskKeywords = [
        "password",
        "login",
        "email",
        "link",
        "request",
        "urgent",
        "clicked"
    ];

    const safeKeywords = [
        "verified",
        "checked",
        "secure",
        "trusted",
        "complex password",
        "strong password",
        "2fa",
        "two factor",
        "encrypted"
    ];

    // Initialize score
    let score = 0;

    // Add weights for high risk
    highRiskKeywords.forEach(word => {
        if (text.includes(word)) score += 5;
    });

    // Add weights for medium risk
    mediumRiskKeywords.forEach(word => {
        if (text.includes(word)) score += 2;
    });

    // Subtract weights for safe behavior
    safeKeywords.forEach(word => {
        if (text.includes(word)) score -= 3;
    });

    // Clamp score to zero
    if (score < 0) score = 0;

    // Determine risk level
    if (score >= 6) {
        return { message: "🔴 High Risk: Behavior indicates critical human-factor vulnerability.", risk: "high" };
    } else if (score >= 3) {
        return { message: "🟡 Moderate Risk: Behavior shows potential awareness gaps.", risk: "medium" };
    } else {
        return { message: "🟢 Low Risk: Behavior reflects strong cybersecurity awareness.", risk: "low" };
    }
}

// Run the analysis and update the UI
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
