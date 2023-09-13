const mongoose = require("mongoose");

const personSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Person's name is required"],
      unique: true,
    }
  },
  { versionKey: false }
  
);

module.exports = mongoose.model("Person", personSchema);