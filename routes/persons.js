const express = require("express");
const {
  createPerson,
  updatePerson,
  deletePerson,
  getPerson,
  getPersons
} = require("../controllers/person");


const router = express.Router();

// create a person
router.post("/", createPerson);

// get all persons
router.get("/", getPersons);

// get a person
router.get("/:user_id", getPerson);

// update a person
router.put("/:user_id", updatePerson);

// delete a delete
router.delete("/:user_id", deletePerson);

module.exports = router;