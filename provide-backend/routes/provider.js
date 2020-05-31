import express from "express";
const router = express.Router();

// importar el model Provider
import Provider from "../models/Provider";

// Agregar una nota
router.post("/", async (req, res) => {
  const body = req.body;
  try {
    const newProvider = await Provider.create(body);

    res.json(newProvider);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Get all
router.get("/", async (req, res) => {
  try {
    const providers = await Provider.find({});

    res.json(providers);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Get un proveedor
router.get("/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const provider = await Provider.findById({ _id });

    res.json(provider);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const provider = await Provider.findById({ _id });

    if (!provider) {
      return res.status(404).json({ mensaje: "Proveedor no encontrado" });
    }

    await provider.remove();
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Put
router.put("/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const provider = await Provider.findByIdAndUpdate(_id, body, { new: true });

    if (!provider) {
      return res.status(400).json({
        mensaje: "No se encontro el Id indicado",
        error,
      });
    }

    res.json(provider);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Exportamos la configuración de express app
module.exports = router;
