# sentiment-dashboard# 🧠 Sentiment AI Dashboard

A web-based **Sentiment Analysis Dashboard** that detects emotions (Positive, Neutral, Negative) from user input text or uploaded content.
Built with a clean, modern interface and powered by multiple AI models to ensure accurate, real-time sentiment insights.

🌐 **Live Demo:** [sentiment-ai-1682327a.base44.app](https://sentiment-ai-1682327a.base44.app)

---

## 🚀 Features

* **Multi-Model Analysis**
  Uses three different AI models for cross-verified sentiment results:

  * **Hugging Face** — Deep learning classification
  * **AWS Comprehend** — Cloud-based emotion detection
  * **VADER Sentiment** — Lightweight NLP scoring model

* **OCR Support**
  Automatically extracts and analyzes text from uploaded images (e.g. screenshots, scanned documents).

* **Emoji Detection**
  Detects emotions expressed through emojis 😊😢😡 and incorporates them into sentiment scoring.

* **Real-Time Visualization**
  Displays categorized outputs in visually clear **charts**, **summary boxes**, and a **data table**.

* **Data Storage**
  Saves analyzed results in-app with **edit** and **delete** functionality for easy management.

---

## 🧩 How It Works

1. **User Input**
   Type or paste text — or upload an image for OCR extraction.

2. **AI Processing**
   Text is analyzed simultaneously by Hugging Face, AWS Comprehend, and VADER Sentiment.

3. **Visualization**
   Each model’s result is displayed as **Positive**, **Negative**, or **Neutral** through graphs and summary cards.

4. **Data Management**
   All results are stored in a table that supports inline editing and deletion.

---

## 🖥️ Tech Stack

| Category  | Technology                                    |
| --------- | --------------------------------------------- |
| Frontend  | WeWeb (Low-code platform)                     |
| AI Models | Hugging Face, AWS Comprehend, VADER Sentiment |
| Backend   | API integrations (via Base44 connectors)      |
| Hosting   | Base44                                        |
| OCR       | Built-in text extraction module               |

---

## 📊 Dashboard Sections Explained

* **Sentiment Summary Boxes** – Show total counts for Positive, Neutral, and Negative results.
* **Pie Chart / Bar Chart** – Visual breakdown of sentiment percentages.
* **User Input Area** – Allows users to type or upload content.
* **Results Table** – Stores all analyzed data with options to edit or remove entries.

---

## 🧠 Example Use Cases

* Analyze customer feedback or product reviews.
* Monitor brand sentiment on social media.
* Understand emotional tone in documents or emails.
* Research emotional trends in datasets.

---

## ⚙️ Future Enhancements

* Add **voice recognition** for spoken sentiment analysis.
* Include **export to CSV** for sentiment data.
