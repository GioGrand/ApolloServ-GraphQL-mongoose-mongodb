const { model, Schema } = require("mongoose");

const personSchema = new Schema({
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }]
});

module.exports = model("Person", personSchema);
