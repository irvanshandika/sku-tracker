/* eslint-disable no-undef */
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { ofetch } from "ofetch";
import { fileURLToPath } from "url";
dotenv.config();

const port = process.env.APP_PORT || 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/mahasiswa", async (req, res) => {
  try {
    const q = req.query.search;
    const response = await ofetch(`${process.env.BASE_URL}/hit_mhs/${q}`, {
      method: "GET",
      responseType: "json",
      parseResponse: JSON.parse,
    });

    return res.status(200).json({ data: response.mahasiswa });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get("/api/dosen", async (req, res) => {
  try {
    const q = req.query.search;
    const response = await ofetch(`${process.env.BASE_URL}/hit/${q}`, {
      method: "GET",
      responseType: "json",
      parseResponse: JSON.parse,
    });

    return res.status(200).json({ data: response.dosen });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
app.get("/api/all", async (req, res) => {
  try {
    const q = req.query.search;
    const mahasiswa = await ofetch(`${process.env.BASE_URL}/hit_mhs/${q}`, {
      method: "GET",
      responseType: "json",
      parseResponse: JSON.parse,
    });
    const dosen = await ofetch(`${process.env.BASE_URL}/hit/${q}`, {
      method: "GET",
      responseType: "json",
      parseResponse: JSON.parse,
    });

    const data = mahasiswa.mahasiswa.concat(dosen.dosen);

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get("/api/data_mahasiswa/:id", async (req, res) => {
  try {
    const response = await ofetch(`${process.env.BASE_URL}/detail_mhs/${req.params.id}`, {
      method: "GET",
      responseType: "json",
      parseResponse: JSON.parse,
    });
    return res.status(200).json({
      data: {
        dataUmum: response.dataumum,
        dataKuliah: response.datastatuskuliah,
        dataStudi: response.datastudi,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get("/api/data_dosen/:id", async (req, res) => {
  try {
    const response = await ofetch(`${process.env.BASE_URL}/detail_dosen/${req.params.id}`, {
      method: "GET",
      responseType: "json",
      parseResponse: JSON.parse,
    });
    return res.status(200).json({ data: response.dataumum });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get("/api/data_mahasiswa/:id", async (req, res) => {
  try {
    const response = await ofetch(`${process.env.BASE_URL}/data_mahasiswa/${req.params.id}`, {
      method: "GET",
      responseType: "json",
      parseResponse: JSON.parse,
    });
    return res.status(200).json({ data: response.dataumum });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(Number(port), () => {
  console.log(`Server up and running at http://localhost:${port}`);
});
