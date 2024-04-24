express = require('express');
const { findAll, findById, filterByName, deleteEmployee, addEmployee } = require("../controllers/employeeController");
const router = express.Router();

router.get("/",findAll);

router.get("/:id",findById);

router.get("/filter",filterByName);

router.post("/",addEmployee);

router.delete("/:id",deleteEmployee);


module.exports = router;