import express from "express";
import morgan from "morgan";
import cors from "cors";
// Para acceder al directorio actual
import path from "path";

const app = express();

const connectDB = require("./config/db.js");

// Conectar a la base de datos
connectDB();

// Inicializar Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
// aplication/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

/*app.get("/", (req, res) => {
  res.send("API running");
});*/

// Definir Rutas
app.use("/api/provider", require("./routes/provider"));

// Middleware para Vue.js router modo history
const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

// Server static assets en produccion
if (process.env.NODE_ENV === "production") {
  // Definir static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
