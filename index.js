import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

import cors from 'cors';
app.use(cors());

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const MODEL = "deepseek/deepseek-chat-v3-0324:free"
const CONTEXTO = `Você é um assistente de receitas típicas brasileiras. Responda de forma clara, objetiva e prática.`;

app.post("/api/perguntas", async (req, res) => {
  const { pergunta } = req.body;

  try {
    const resposta = await axios.post(
      OPENROUTER_URL,
      {
        model: MODEL,
        messages: [
          { role: "system", content: CONTEXTO },
          { role: "user", content: pergunta }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        }
      }
    );

    res.json({ resposta: resposta.data.choices[0].message.content });
  } catch (err) {
    console.error("Erro ao consultar LLM:", err.response?.data || err.message);
    res.status(500).json({ erro: "Falha ao consultar modelo LLM." });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});