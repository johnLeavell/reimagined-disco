const { Router } = require("express");
const userController = require("../controllers/user");

const router = Router();

// User endpoints
router.post("/api/users", userController.create);
// router.get("/api/user/:id", userController.getUserById);
// Retrieve all published Users
// router.get("/published", users.findAllPublished);
// Retrieve a single User with id
// router.get("/:id", users.findOne);
// Update a User with id
// router.put("/:id", users.update);
// Delete a User with id
// router.delete("/:id", users.delete);
// Create a new User
// router.delete("/", users.deleteAll);
module.exports = router;
