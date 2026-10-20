import express from 'express'

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Docker!",
  });
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Rahman" },
    { id: 2, name: "Faisal" },
  ]);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port https://localhost:${PORT}`);
});