const express = require("express");
const axios = require("axios");

const app = express();

app.get("/usuarios", async (req, res) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  }
});

app.get("/usuarios/:id", async (req, res) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`);
    const mappedResponse = {
      title: response.data.title,
    };
    res.json(mappedResponse);
  } catch (error) {
    console.error(error);
    res.status(404).send("Usuario no encontrado");
  }
});

app.get("/usuarios/title/:title", async (req, res) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?title=${req.params.title}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(404).send("Titulo no encontrado");
  }
});

app.get("/usuarios/limite/:limit", async (req, res) => {
  try {
    const limit = parseInt(req.params.limit, 10);
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
