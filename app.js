const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.set("view engine", "ejs");

// Home
app.get("/", (req, res) => {
  res.render("index");
});

// Chat endpoint (MOCK AI)
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    // Mock AI reply: cuma echo + random quip biar keliatan hidup
    const mockReplies = [
      "Oke, noted!",
      "Menarik, lanjut...",
      "Echo: " + userMessage,
      "Hmm, gue ngerti maksud lo."
    ];

    const reply =
      mockReplies[Math.floor(Math.random() * mockReplies.length)];

    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "Error from AI" });
  }
});

app.listen(3000, () => {
  console.log("Mock AI chatbot running on http://localhost:3000");
});
