const mongoose = require("mongoose");

// Ek field ka structure (Text, Email, Number, Dropdown, Checkbox, Radio)
const FieldSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      default: "Untitled Field",
    },
    type: {
      type: String,
      enum: ["text", "email", "number", "dropdown", "checkbox", "radio"],
      required: true,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    // Sirf dropdown / checkbox / radio ke liye use hoga
    options: {
      type: [String],
      default: [],
    },
  },
  { _id: true }
);

// Poore form ka structure
const FormSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      default: "Untitled Form",
    },
    fields: {
      type: [FieldSchema],
      default: [],
    },
    style: {
      buttonColor: { type: String, default: "#4f46e5" },
      backgroundColor: { type: String, default: "#ffffff" },
      fontSize: { type: String, default: "16px" },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Form", FormSchema);
