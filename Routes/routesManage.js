const express = require("express")
const { getAllContact, getContact, postContact, updateContact, deleteContact } = require("../Controllers/ContactController")
const router = express.Router()

router.route("/").get(getAllContact)
// router.route("/").get(getContact)
router.route("/").post(postContact)
router.route("/:id").put(updateContact)
router.route("/:id").delete(deleteContact)

module.exports = router;