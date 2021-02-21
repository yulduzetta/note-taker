const express = require("express");

const PORT = process.env.PORT || 5555;

// instanditates the server
const app = express();

const apiRoutes = require("./routes/api");
const htmlRoutes = require("./routes/html");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Any time a client navigates to <ourhost>/api,
// the app will use the router we set up in apiRoutes.
//  If / is the endpoint, then the router will serve back our HTML routes.
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// listen for requests
app.listen(PORT, () => {
  console.log(`API server is now on port ${PORT}!`);
});