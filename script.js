/* =====================================================
   Sentiment AI Dashboard Script
   Author: Malehu Johanna Segoapa
   ===================================================== */

const inputField = document.getElementById("userInput");
const analyzeBtn = document.getElementById("analyzeBtn");
const clearBtn = document.getElementById("clearBtn");
const resultBox = document.getElementById("resultBox");
const chartCanvas = document.getElementById("sentimentChart");

const positiveCount = document.getElementById("positiveCount");
const neutralCount = document.getElementById("neutralCount");
const negativeCount = document.getElementById("negativeCount");

let sentimentData = { Positive: 0, Neutral: 0, Negative: 0 };

const positiveWords = ["happy", "love", "great", "good", "excellent", "joy", "😊", "😁", "👍", "wonderful"];
const negativeWords = ["sad", "bad", "hate", "angry", "terrible", "awful", "😢", "😡", "👎", "depressing"];

function analyzeSentiment(text) {
  const lower = text.toLowerCase();
  let score = 0;

  positiveWords.forEach(word => { if (lower.includes(word)) score++; });
  negativeWords.forEach(word => { if (lower.includes(word)) score--; });

  if (score > 0) return "Positive";
  if (score < 0) return "Negative";
  return "Neutral";
}

function updateCounts() {
  positiveCount.textContent = sentimentData.Positive;
  neutralCount.textContent = sentimentData.Neutral;
  negativeCount.textContent = sentimentData.Negative;
}

function updateChart() {
  const ctx = chartCanvas.getContext("2d");
  if (window.sentimentChart) window.sentimentChart.destroy();

  window.sentimentChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: Object.keys(sentimentData),
      datasets: [{
        data: Object.values(sentimentData),
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" }
      }
    }
  });
}

analyzeBtn.addEventListener("click", () => {
  const text = inputField.value.trim();
  if (!text) return alert("Please enter text to analyze.");

  const sentiment = analyzeSentiment(text);
  sentimentData[sentiment]++;
  resultBox.innerHTML = `Detected Sentiment: <strong>${sentiment}</strong>`;
  updateCounts();
  updateChart();
});

clearBtn.addEventListener("click", () => {
  inputField.value = "";
  resultBox.innerHTML = "";
  sentimentData = { Positive: 0, Neutral: 0, Negative: 0 };
  updateCounts();
  updateChart();
});

updateChart();
