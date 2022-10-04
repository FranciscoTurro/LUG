import { Schema, model } from "mongoose";

const usersSchema = new Schema({
    name:String,
    mail:String,
});

export default model("Users", usersSchema);
//asd