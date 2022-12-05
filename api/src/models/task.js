const mongoose = require("mongoose");

const MODELNAME = "task";

const Schema = new mongoose.Schema({
  title: { type: String, unique: true },
  projectId: { type: String },
  status: { type: String, enum: ["todo", "doing", "done"], default: "todo" },
  created_at: { type: Date, default: Date.now },
  last_updated_at: { type: Date, default: Date.now },
});

const OBJ = mongoose.model(MODELNAME, Schema);
module.exports = OBJ;
