import { Schema, model } from "mongoose";

// declaro la estructura que va a tener mi esquema/documento/tabla.
const commentsSchema = new Schema({
  body:String,
  date:{type:Date,default:Date.now},
  user:{type:Schema.Types.ObjectId,ref:"Users"}
});
// exporto mi modelo, el cual me permite acceder a los metodos de la bd.
export default model("Comments", commentsSchema);
