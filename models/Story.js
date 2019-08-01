const { model, Schema } = require("mongoose");

const storySchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "Person" },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: "Person" }]
});

module.exports = model("Story", storySchema);
