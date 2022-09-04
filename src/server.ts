import express from "express";
import { Router, Request, Response } from "express";

const app = express();
const route = Router();
const PORT = 3333;

app.use(express.json());

route.get("/", (req, res) => {
  res.sendFile('./view/index.html');
});

app.use(route);

app.listen(PORT, () => console.log('Servidor rodando na porta ', PORT));