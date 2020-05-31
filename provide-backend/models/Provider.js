import mongoose from "mongoose";
const Schema = mongoose.Schema;

const providerSchema = new Schema({
  nombre: { type: String, required: [true, "Nombre obligatorio"] },
  telefono: String,
  direccion: String,
  compañia: String,
  date: { type: Date, default: Date.now },
  activo: { type: Boolean, default: true },
});

// Convertir a modelo
const Provider = mongoose.model("Provider", providerSchema);

export default Provider;
