import express from "express";
import path from "path";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route
  app.post("/api/contact", async (req, res) => {
    const { name, contact, task } = req.body;

    if (!name || !contact) {
      return res.status(400).json({ status: "error", message: "Missing fields" });
    }

    const message = `🆕 НОВАЯ ЗАЯВКА С ЛЕНДИНГА\n━━━━━━━━━━━━━━━━━━━\n👤 Имя: ${name}\n📱 Контакт: ${contact}\n📝 Задача: ${task || 'Не указана'}\n━━━━━━━━━━━━━━━━━━━\n🕐 Время: ${new Date().toLocaleString()}`;

    try {
      // 2. Send to Telegram
      if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
        await axios.post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message
        });
      }

      res.json({ status: "success", message: "Заявка успешно отправлена!" });
    } catch (error) {
      console.error("Error sending contact message:", error);
      res.status(500).json({ status: "error", message: "Ошибка отправки" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
