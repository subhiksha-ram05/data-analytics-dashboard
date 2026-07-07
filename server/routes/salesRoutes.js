const express = require("express");
const router = express.Router();

const {
  addSale,
  getSales,
  getSaleById,
  updateSale,
  deleteSale,
} = require("../controllers/salesController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, addSale);
router.get("/", protect, getSales);
router.get("/:id", protect, getSaleById);
router.put("/:id", protect, updateSale);
router.delete("/:id", protect, deleteSale);

module.exports = router;