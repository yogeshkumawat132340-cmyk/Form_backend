const Response = require("../models/Response");

// @desc    Submit a response
// @route   POST /api/responses
const submitResponse = async (req, res) => {
  try {
    const { formId, answers } = req.body;

    const response = new Response({ formId, answers });
    const saved = await response.save();

    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: "error into response submit", error: error.message });
  }
};

const getResponsesByForm = async (req, res) => {
  try {
    const responses = await Response.find({ formId: req.params.formId }).sort({
      createdAt: -1,
    });
    res.status(200).json(responses);
  } catch (error) {
    res.status(500).json({ message: "error into response fetch", error: error.message });
  }
};

module.exports = {
  submitResponse,
  getResponsesByForm,
};
