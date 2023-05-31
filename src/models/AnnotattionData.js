const mongoose = require("mongoose");

const AnnotattionDataSchema = new mongoose.Schema ({
  title: String,
  notes: String,
  priority: Boolean,
});

module.exports = mongoose.model("Annotation", AnnotattionDataSchema);
