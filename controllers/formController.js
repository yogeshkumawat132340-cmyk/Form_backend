const Form = require("../models/Form");

const createForm = async (req, res) => {
  try {
    const { title, fields, style } = req.body;

    const form = new Form({
      title,
      fields,
      style,
    });

    const savedForm = await form.save();
    res.status(201).json(savedForm);
  } catch (error) {
    res.status(500).json({ message: "error in form creation", error: error.message });
  }
};

const getForms = async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 });
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ message: "error into form fetch", error: error.message });
  }
};

const getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ message: "form not found" });
    }
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: "error in form fetch", error: error.message });
  }
};

const updateForm = async (req, res) => {
  try {
    const { title, fields, style } = req.body;

    const form = await Form.findByIdAndUpdate(
      req.params.id,
      { title, fields, style },
      { new: true, runValidators: true }
    );

    if (!form) {
      return res.status(404).json({ message: "Form nahi mila" });
    }

    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ message: "error into form update", error: error.message });
  }
};

const deleteForm = async (req, res) => {
  try {
    const form = await Form.findByIdAndDelete(req.params.id);
    if (!form) {
      return res.status(404).json({ message: "Form nahi mila" });
    }
    res.status(200).json({ message: "Form delete ho gaya" });
  } catch (error) {
    res.status(500).json({ message: "error into form delete", error: error.message });
  }
};

module.exports = {
  createForm,
  getForms,
  getFormById,
  updateForm,
  deleteForm,
};
