const express = require("express");
const router = express.Router();

const Simple_data_model = require("../../database/mongoDB/models/simple_data_model");
// Get All
router.get("/", async (req, res) => {
  try {
    const data = await Simple_data_model.find();
    res.status(200).json({ message: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get One
router.get("/:id", get_simple_data, (req, res) => {
  res.json(res.item);
});

// Create One
router.post("/", async (req, res) => {
  const simple_data = new Simple_data_model({
    name: req.body.name,
    item: req.body.item,
    date: Date.now(),
  });

  try {
    const new_item = await simple_data.save();
    res.status(201).json(new_item);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

// Update One
router.patch("/:id", get_simple_data, async (req, res) => {
  if (req.body.name != null) {
    res.item.name = req.body.name;
  }
  if (req.body.item != null) {
    res.item.item = req.body.item;
  }
  try {
    const updated_item = await res.item.save();
    res.json(updated_item);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// Delete One
router.delete("/:id", get_simple_data, async (req, res) => {
  try {
    await res.item.deleteOne();
    res.json({ message: "Item Deleted" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// middleware
async function get_simple_data(req, res, next) {
  let item;
  try {
    item = await Simple_data_model.findById(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: "Cannot find item" });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
  res.item = item;
  next();
}

module.exports = router;
