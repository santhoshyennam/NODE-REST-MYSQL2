express = require('express');
const { findAll} = require("../controllers/orderController");
const router = express.Router();

router.get("/",findAll);

module.exports = router;