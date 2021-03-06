// This file will take all of the files in the "routes/api" folder
// and export them.

const router = require("express").Router();
const fetchRoutes = require("./fetch");
// const noteRoutes = require("./notes");
const headlineRoutes = require("./headlines");
// const clearRoutes = require("./clear");

router.use("/fetch", fetchRoutes);
// router.use("/notes", noteRoutes);
router.use("/headlines", headlineRoutes);
// router.use("/clear", clearRoutes);

module.exports = router;
