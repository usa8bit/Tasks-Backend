// impport controller, express & router
const StudentController = require("../controllers/StudentController.js")
const express = require("express");
const router = express.Router();

// define route
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

module.exports = router;