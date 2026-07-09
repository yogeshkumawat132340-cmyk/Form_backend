const mongoose = require("mongoose");

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
    options: {
      type: [String],
      default: [],
    },
  },
  { _id: true }
);

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
