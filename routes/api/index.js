const router = require("express").Router();
const notesRoutes = require("../api/notesRoutes");

router.use(notesRoutes);

module.exports = router;
