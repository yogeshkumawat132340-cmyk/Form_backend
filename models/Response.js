const mongoose = require("mongoose");

const ResponseSchema = new mongoose.Schema(
  {
    formId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Form",
      required: true,
    },
    // answers: { "<fieldId>": "value", ... } -> flexible object
    answers: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      default: {},
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Response", ResponseSchema);
