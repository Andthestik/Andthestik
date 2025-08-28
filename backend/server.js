import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(bodyParser.json());

app.post("/api/summarize", async (req, res) => {
  try {
    const { transcript } = req.body;
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: `Summarize the following meeting transcript and extract actionable tasks.\nTranscript: """${transcript}"""`,
      }),
    });
    const data = await response.json();
    res.json({ summary: data.output?.[0]?.content?.[0]?.text || "" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
