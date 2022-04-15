import QuoteModel from "../models/quotes.model.js";

const list = async (req, res) => {
  try {
    const quotes = await QuoteModel.find();
    res.json(quotes);
  } catch (err) {
    res.status(402).json(err.message);
  }
};

const show = async (req, res) => {
  try {
    const quotes = await QuoteModel.findById(req.params.id);
    if (!quotes) throw { message: "Quote not found" };

    res.json(quotes);
  } catch (err) {
    res.status(402).json(err.message);
  }
};

const store = async (req, res) => {
  try {
    const { name, quote } = req.body;
    const quoteObj = new QuoteModel({ name, quote });
    await quoteObj.save();

    res.json(quoteObj);
  } catch (err) {
    res.status(402).json(err.message);
  }
};

const update = async (req, res) => {
  try {
    if (!req.params.id) throw { message: "Quote id is missing" };
    const { name, quote } = req.body;

    const quoteObj = await QuoteModel.findByIdAndUpdate(req.params.id, { name, quote });
    if (!quoteObj) throw { message: "Quote not found" };

    res.json('Quote updated successfully');
  } catch (err) {
    res.status(402).json(err.message);
  }
};

const destroy = async (req, res) => {
  try {
    if (!req.params.id) throw { message: "Quote id is missing" };

    const quote = await QuoteModel.findByIdAndDelete(req.params.id);
    if (!quote) throw { message: "Quote not found" };

    res.json("Quote Deleted successfully");
  } catch (err) {
    res.status(402).json(err.message);
  }
};

export { list, show, store, update, destroy };
