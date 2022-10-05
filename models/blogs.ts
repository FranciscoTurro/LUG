import { Schema, model } from "mongoose";

// declaro la estructura que va a tener mi esquema/documento/tabla.
const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: { type: Schema.Types.ObjectId, ref: "Users" },
  body: String,
  comments: [{ type: Schema.Types.ObjectId, ref: "Comments", default: [] }],
  date: { type: Date, default: Date.now },
});
// exporto mi modelo, el cual me permite acceder a los metodos de la bd.
export default model("Blog", blogSchema);
